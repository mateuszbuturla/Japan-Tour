import { PrefectureInterface } from './../interfaces/prefecture';
import {
  forwardRef,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Prefecture } from './prefecture.entity';
import { RegionService } from 'src/region/region.service';
import AddPrefectureDto from './dto/AddPrefectureDto';
import { MulterDiskUploadedFiles } from 'src/interfaces/files';
import NormalizeString from 'src/utils/normalizeString';
import { storageDir } from 'src/utils/storage';
import * as fs from 'fs';
import * as path from 'path';
import GetPrefectureDto from './dto/GetPrefectureDto';

@Injectable()
export class PrefectureService {
  constructor(
    @InjectModel('Prefecture')
    private readonly prefectureModel: Model<Prefecture>,
    @Inject(forwardRef(() => RegionService))
    private readonly regionService: RegionService,
  ) {}

  async getPrefectures({
    region,
  }: GetPrefectureDto): Promise<PrefectureInterface[]> {
    let findQueries = {};

    if (region) {
      const res = await this.regionService.getSingleRegions(region);
      findQueries['region'] = res.id;
    }

    const prefectures = await this.prefectureModel.find(findQueries);
    return prefectures;
  }

  async getSinglePrefecture(key: string): Promise<PrefectureInterface> {
    const prefecture = await this.findPrefecture(key);

    return prefecture;
  }

  private async findPrefecture(key: string): Promise<PrefectureInterface> {
    let prefecture;
    try {
      prefecture = await this.prefectureModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find prefecture.');
    }
    if (!prefecture) {
      throw new NotFoundException('Could not find prefecture.');
    }
    return prefecture;
  }

  async createPrefecture(
    data: AddPrefectureDto,
    imgs: MulterDiskUploadedFiles,
  ) {
    const img = imgs?.img?.[0] ?? null;

    if (!img) {
      throw new HttpException('Validation failed', 400);
    }

    try {
      const existPrefecture = await this.prefectureModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();

      if (existPrefecture.length > 0) {
        throw new HttpException('Prefecture is exist.', 409);
      } else {
        const region = await this.regionService.getSingleRegions(data.region);

        if (!region) {
          throw new HttpException('Validation failed', 400);
        }

        const newPrefecture = new this.prefectureModel({
          name: data.name,
          key: NormalizeString(data.name),
          img: img.filename,
          description: data.description,
          shortDescription: data.shortDescription,
          region: region.id,
          highlight: data.highlight,
        });
        const res = await newPrefecture.save();
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

  async updatePrefecture(
    data: AddPrefectureDto,
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

      let prefectureToUpdate = null;
      try {
        prefectureToUpdate = await this.prefectureModel.findOne({ _id: id });
      } catch (e) {
        throw new HttpException('Prefecture is not exist', 404);
      }
      const existPrefecture = await this.prefectureModel
        .find({
          $or: [{ name: data.name }, { key: NormalizeString(data.name) }],
        })
        .exec();
      if (existPrefecture.length > 0 && data.name !== prefectureToUpdate.name) {
        throw new HttpException('Prefecture is already exist.', 409);
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

        const updatedPrefectures = await this.prefectureModel.updateOne(
          { key: prefectureToUpdate.key },
          newData,
        );
        if (updatedPrefectures.n > 0) {
          try {
            if (prefectureToUpdate.img) {
              fs.unlinkSync(path.join(storageDir(), prefectureToUpdate.img));
            }
          } catch (e2) {}
          return { status: 200, message: 'Succesfully updated' };
        } else if (updatedPrefectures.n === 0) {
          throw new HttpException('Could not update prefecture.', 409);
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

  async removePrefecture(id: string) {
    const prefectureToRemove = await this.prefectureModel.findOne({ _id: id });

    if (!prefectureToRemove) {
      throw new HttpException('Prefecture is not exist', 404);
    }

    if (prefectureToRemove) {
      const removedPrefecture = await this.prefectureModel.remove({ _id: id });
      if (removedPrefecture.deletedCount > 0) {
        try {
          if (prefectureToRemove.img) {
            fs.unlinkSync(path.join(storageDir(), prefectureToRemove.img));
          }
        } catch (e2) {}
        return prefectureToRemove;
      } else {
        throw new HttpException('Could not remove prefecture.', 409);
      }
    }
  }
}
