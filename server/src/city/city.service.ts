import {
  forwardRef,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CityInterface } from 'src/interfaces/city';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import NormalizeString from 'src/utils/normalizeString';
import { storageDir } from 'src/utils/storage';
import { City } from './city.entity';
import AddCityDto from './dto/AddCityDto';
import * as fs from 'fs';
import * as path from 'path';
import { RegionService } from 'src/region/region.service';
import { PrefectureService } from 'src/prefecture/prefecture.service';

@Injectable()
export class CityService {
  constructor(
    @InjectModel('City')
    private readonly cityModel: Model<City>,
    @Inject(forwardRef(() => RegionService))
    private readonly regionService: RegionService,
    @Inject(forwardRef(() => PrefectureService))
    private readonly prefectureService: PrefectureService,
  ) {}

  async getCities(): Promise<CityInterface[]> {
    const cities = await this.cityModel.find();
    return cities.map((city) => ({
      id: city._id,
      name: city.name,
      key: city.key,
      shortDescription: city.shortDescription,
      description: city.description,
      img: city.img,
      region: city.region,
      prefecture: city.prefecture,
      highlight: city.highlight,
    }));
  }

  async getSingleCity(key: string): Promise<CityInterface> {
    const city = await this.findCity(key);

    return city;
  }

  private async findCity(key: string): Promise<CityInterface> {
    let city;
    try {
      city = await this.cityModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find city.');
    }
    if (!city) {
      throw new NotFoundException('Could not find city.');
    }
    return city;
  }

  async createCity(data: AddCityDto, imgs: MulterDiskUploadedFiles) {
    const img = imgs?.img?.[0] ?? null;

    if (!img) {
      throw new HttpException('Validation failed', 400);
    }

    try {
      const existCity = await this.cityModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();

      if (existCity.length > 0) {
        throw new HttpException('City is exist.', 409);
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

        const newCity = new this.cityModel({
          name: data.name,
          key: NormalizeString(data.name),
          img: img.filename,
          description: data.description,
          shortDescription: data.shortDescription,
          region: region.id,
          prefecture: prefecture.id,
          highlight: data.highlight,
        });
        const res = await newCity.save();
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

  async updateCity(
    data: AddCityDto,
    id: string,
    imgs: MulterDiskUploadedFiles,
  ) {
    const img = imgs?.img?.[0] ?? null;
    if (!img) {
      throw new HttpException('Validation failed', 400);
    }
    try {
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
      let cityToUpdate = null;
      try {
        cityToUpdate = await this.cityModel.findOne({ _id: id });
      } catch (e) {
        throw new HttpException('City is not exist', 404);
      }
      const existCity = await this.cityModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();
      if (existCity.length > 0 && data.name !== cityToUpdate.name) {
        throw new HttpException('City is already exist.', 409);
      } else {
        let newData = {
          name: data.name,
          key: NormalizeString(data.name),
          description: data.description,
          img: img.filename,
          shortDescription: data.shortDescription,
          region: region.id,
          highlight: data.highlight,
        };

        const updatedCity = await this.cityModel.updateOne(
          { key: cityToUpdate.key },
          newData,
        );
        if (updatedCity.n > 0) {
          try {
            if (cityToUpdate.img) {
              fs.unlinkSync(path.join(storageDir(), cityToUpdate.img));
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
}
