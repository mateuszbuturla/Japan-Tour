import { PrefectureService } from 'src/prefecture/prefecture.service';
import { Attraction } from './attraction.entity';
import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttractionInterface } from 'src/interfaces/attraction';
import { RegionService } from 'src/region/region.service';

@Injectable()
export class AttractionService {
  constructor(
    @InjectModel('Attraction')
    private readonly attractionModel: Model<Attraction>,
    @Inject(forwardRef(() => RegionService))
    private readonly regionService: RegionService,
    @Inject(forwardRef(() => PrefectureService))
    private readonly prefectureService: PrefectureService,
  ) {}

  async getAttractions(): Promise<AttractionInterface[]> {
    const cities = await this.attractionModel.find();
    return cities.map((attraction) => ({
      id: attraction._id,
      name: attraction.name,
      key: attraction.key,
      shortDescription: attraction.shortDescription,
      description: attraction.description,
      img: attraction.img,
      region: attraction.region,
      prefecture: attraction.prefecture,
      city: attraction.city,
      highlight: attraction.highlight,
    }));
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

  async getAttractionsFromRegion(key: string): Promise<AttractionInterface[]> {
    const region = await this.regionService.getSingleRegions(key);

    const attractions = await this.attractionModel.find({ region: region.id });
    return attractions.map((attraction) => ({
      id: attraction._id,
      name: attraction.name,
      key: attraction.key,
      shortDescription: attraction.shortDescription,
      description: attraction.description,
      img: attraction.img,
      region: attraction.region,
      prefecture: attraction.prefecture,
      city: attraction.city,
      highlight: attraction.highlight,
    }));
  }

  async getAttractionsFromPrefecture(
    key: string,
  ): Promise<AttractionInterface[]> {
    const prefecture = await this.prefectureService.getSinglePrefecture(key);

    const attractions = await this.attractionModel.find({
      prefecture: prefecture.id,
    });
    return attractions.map((attraction) => ({
      id: attraction._id,
      name: attraction.name,
      key: attraction.key,
      shortDescription: attraction.shortDescription,
      description: attraction.description,
      img: attraction.img,
      region: attraction.region,
      prefecture: attraction.prefecture,
      city: attraction.city,
      highlight: attraction.highlight,
    }));
  }
}
