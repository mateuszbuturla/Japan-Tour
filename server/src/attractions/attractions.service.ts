import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Attraction } from "./attraction.model";

const data = [
  {
    //HOKKAIDO - FURANO
    name: "Furano Flower Fields",
    url: "/furano-flower-fields",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "furano",
    key: "furano-flower-fields",
    bestAttractions: false,
    category: "building",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Biei",
    url: "/biei",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "furano",
    key: "biei",
    bestAttractions: false,
    category: "building",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Furano Ski Resort",
    url: "/furano-ski-resort",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "furano",
    key: "furano-ski-resort",
    bestAttractions: true,
    category: "sport",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Blue Pond",
    url: "/blue-pond",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "furano",
    key: "blue-pond",
    bestAttractions: true,
    category: "lake",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  //HOKKAIDO - SAPPORO
  {
    name: "Mount Moiwa",
    url: "/mount-moiwa",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "mount-moiwa",
    bestAttractions: true,
    category: "mountain",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Moerenuma Park",
    url: "/moerenuma-park",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "moerenuma-park",
    bestAttractions: false,
    category: "park",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Historic Village",
    url: "/historic-village",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "historic-village",
    bestAttractions: true,
    category: "viilage",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Odori Park",
    url: "/odori-park",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "odori-park",
    bestAttractions: true,
    category: "park",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  //TOHOKU - SENDAI
  {
    name: "Zuihoden Mausoleum",
    url: "/zuihoden-mausoleum",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "zuihoden-mausoleum",
    bestAttractions: false,
    category: "muzeum",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Rinnoji Temple",
    url: "/rinnoji-temple",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "rinnoji-temple",
    bestAttractions: true,
    category: "temple",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Osaki Hachimangu",
    url: "/osaki-hachimangu",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "osaki-hachimangu",
    bestAttractions: true,
    category: "shrine",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Aoba Castle",
    url: "/aoba-castle",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "aoba-castle",
    bestAttractions: false,
    category: "castle",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Aoba Castle2",
    url: "/aoba-castle2",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "aoba-castle2",
    bestAttractions: false,
    category: "castle",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  {
    name: "Aoba Castle3",
    url: "/aoba-castle3",
    img: ["kyushu.jpg"],
    shortDescription: "Lorem Ipsum is simply dummy text",
    region: "hokkaido",
    city: "sapporo",
    key: "aoba-castle3",
    bestAttractions: false,
    category: "castle",
    description: [
      {
        type: "text",
        value:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    ],
    otherData: [],
  },
  //TOHOKU - SENDAI
];

@Injectable()
export class AttractionsService {
  constructor(
    @InjectModel("Attraction")
    private readonly attractionModel: Model<Attraction>
  ) {}

  async getBestAttractionsFromRegion(region: string) {
    const attractions = await this.attractionModel
      .find({ region, bestAttractions: true })
      .exec();
    return attractions;
  }

  async getAllAttractionsFromCategory(category: string) {
    const attractions = await this.attractionModel.find({ category }).exec();
    return attractions;
  }

  async getAllFromCity(city: string) {
    const attractions = await this.attractionModel.find({ city }).exec();
    return attractions;
  }

  async getSingleAttraction(key: string) {
    const attraction = await this.findAttraction(key);
    return attraction;
  }

  private async findAttraction(key: string): Promise<Attraction> {
    let attraction;
    try {
      attraction = await this.attractionModel.findOne({ key }).exec();
    } catch (error) {
      throw new NotFoundException("Could not find attraction.");
    }
    if (!attraction) {
      throw new NotFoundException("Could not find attraction.");
    }
    return attraction;
  }
}
