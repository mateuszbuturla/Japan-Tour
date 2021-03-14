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
  ) {}

  async getAttractions({
    region,
    prefecture,
    city,
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

        const newAttraction = new this.attractionModel({
          name: data.name,
          key: NormalizeString(data.name),
          img: img.filename,
          description: data.description,
          shortDescription: data.shortDescription,
          region: region.id,
          prefecture: prefecture.id,
          highlight: data.highlight,
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
}
