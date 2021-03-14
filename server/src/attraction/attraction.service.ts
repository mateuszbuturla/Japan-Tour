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
import { CityService } from 'src/city/city.service';
import GetAttractionsDto from './dto/GetAttractionsDto';

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
}
