import { PrefectureService } from 'src/prefecture/prefecture.service';
import { Attraction } from './attraction.entity';
import {
  forwardRef,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttractionInterface } from 'src/interfaces/attraction';
import { RegionService } from 'src/region/region.service';
import { CityService } from 'src/city/city.service';
import GetAttractionsDto from './dto/GetAttractionsDto';
import AddAttractionDto from './dto/AddAttractionDto';
import NormalizeString from 'src/utils/normalizeString';
import { storageDir } from 'src/utils/storage';
import * as fs from 'fs';
import * as path from 'path';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class AttractionService {
  constructor(
    @InjectModel('Attraction')
    private readonly attractionModel: Model<Attraction>,
    @Inject(forwardRef(() => RegionService))
    private readonly regionService: RegionService,
    @Inject(forwardRef(() => PrefectureService))
    private readonly prefectureService: PrefectureService,
    @Inject(forwardRef(() => CityService))
    private readonly cityService: CityService,
    @Inject(forwardRef(() => CategoryService))
    private readonly categoryService: CategoryService,
  ) {}

  async getAttractions({
    region,
    prefecture,
    city,
    category,
    categoryId
  }: GetAttractionsDto): Promise<AttractionInterface[]> {
    let findQueries = {};

    if (region) {
      const res = await this.regionService.getSingleRegions(region);
      findQueries['region'] = res.id;
    }

    if (prefecture) {
      const res = await await this.prefectureService.getSinglePrefecture(
        prefecture,
      );
      findQueries['prefecture'] = res.id;
    }

    if (city) {
      const res = await this.cityService.getSingleCity(city);
      findQueries['city'] = res.id;
    }

    if (category) {
      const res = await this.categoryService.getSingleCategory(category);
      findQueries['category'] = res.id;
    }
    else if (categoryId) {
      findQueries['category'] = categoryId;
    }

    const attractions = await this.attractionModel.find(findQueries);
    return attractions;
  }

  async getSingleAttraction(key: string): Promise<AttractionInterface> {
    const attraction = await this.findAttraction(key);

    return attraction;
  }

  private async findAttraction(key: string): Promise<AttractionInterface> {
    let attraction;
    try {
      attraction = await this.attractionModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find attraction.');
    }
    if (!attraction) {
      throw new NotFoundException('Could not find attraction.');
    }
    return attraction;
  }

  async createAttraction(
    data: AddAttractionDto,
    imgs: MulterDiskUploadedFiles,
  ) {
    const img = imgs?.img?.[0] ?? null;

    if (!img) {
      throw new HttpException('Validation failed', 400);
    }

    try {
      const existAttraction = await this.attractionModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();

      if (existAttraction.length > 0) {
        throw new HttpException('Attraction is exist.', 409);
      } else {
        const region = await this.regionService.getSingleRegions(data.region);

        if (!region) {
          throw new HttpException('Validation failed', 400);
        }

        const prefecture = await this.prefectureService.getSinglePrefecture(
          data.prefecture,
        );

        if (!prefecture || prefecture.region !== region.id) {
          throw new HttpException('Validation failed', 400);
        }

        let city;

        if (data.city) {
          city = await this.cityService.getSingleCity(data.city);
          if (
            !city ||
            city.region !== region.id ||
            city.prefecture !== prefecture.id
          ) {
            throw new HttpException('Validation failed', 400);
          }
        }

        const category = await this.categoryService.getSingleCategory(data.category);

        if (!category) {
          throw new HttpException('Validation failed', 400);
        }

        const newAttraction = new this.attractionModel({
          name: data.name,
          key: NormalizeString(data.name),
          img: img.filename,
          description: data.description,
          shortDescription: data.shortDescription,
          region: region.id,
          prefecture: prefecture.id,
          highlight: data.highlight,
          category: category.id,
        });
        if (data.city) {
          newAttraction.city = city.id;
        }
        const res = await newAttraction.save();
        return res;
      }
    } catch (e: any) {
      try {
        if (img) {
          fs.unlinkSync(path.join(storageDir(), img.filename));
        }
      } catch (e2) {}

      throw e;
    }
  }

  async updateAttraction(
    data: AddAttractionDto,
    id: string,
    imgs: MulterDiskUploadedFiles,
  ) {
    const img = imgs?.img?.[0] ?? null;
    if (!img) {
      throw new HttpException('Validation failed', 400);
    }
    try {
      const existAttraction = await this.attractionModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();
      let attractionToUpdate = null;
      try {
        attractionToUpdate = await this.attractionModel.findOne({ _id: id });
      } catch (e) {
        throw new HttpException('Attraction is not exist', 404);
      }
      if (existAttraction.length > 0 && data.name !== attractionToUpdate.name) {
        throw new HttpException('Attraction is already exist.', 409);
      } else {
        const region = await this.regionService.getSingleRegions(data.region);
        if (!region) {
          throw new HttpException('Validation failed', 400);
        }
        const prefecture = await this.prefectureService.getSinglePrefecture(
          data.prefecture,
        );
        if (!prefecture || prefecture.region !== region.id) {
          throw new HttpException('Validation failed', 400);
        }

        const category = await this.categoryService.getSingleCategory(data.category);

        if (!category) {
          throw new HttpException('Validation failed', 400);
        }

        let city;

        if (data.city) {
          city = await this.cityService.getSingleCity(data.city);
          if (
            !city ||
            city.region !== region.id ||
            city.prefecture !== prefecture.id
          ) {
            throw new HttpException('Validation failed', 400);
          }
        }

        let newData = {
          name: data.name,
          key: NormalizeString(data.name),
          description: data.description,
          img: img.filename,
          shortDescription: data.shortDescription,
          region: region.id,
          highlight: data.highlight,
          category: category.id,
        };

        if (data.city) {
          newData['city'] = city.id;
        }

        const updatedCity = await this.attractionModel.updateOne(
          { key: attractionToUpdate.key },
          newData,
        );
        if (updatedCity.n > 0) {
          try {
            if (attractionToUpdate.img) {
              fs.unlinkSync(path.join(storageDir(), attractionToUpdate.img));
            }
          } catch (e2) {}
          return { status: 200, message: 'Succesfully updated' };
        } else if (updatedCity.n === 0) {
          throw new HttpException('Could not update city.', 409);
        }
      }
    } catch (e: any) {
      try {
        if (img) {
          fs.unlinkSync(path.join(storageDir(), img.filename));
        }
      } catch (e2) {}

      throw e;
    }
  }

  async removeAttraction(id: string) {
    const attractionToRemove = await this.attractionModel.findOne({ _id: id });

    if (!attractionToRemove) {
      throw new HttpException('Attraction is not exist', 404);
    }

    if (attractionToRemove) {
      const removedAttraction = await this.attractionModel.remove({ _id: id });
      if (removedAttraction.deletedCount > 0) {
        try {
          if (attractionToRemove.img) {
            fs.unlinkSync(path.join(storageDir(), attractionToRemove.img));
          }
        } catch (e2) {}
        return attractionToRemove;
      } else {
        throw new HttpException('Could not remove attraction.', 409);
      }
    }
  }
}
