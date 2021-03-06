export interface AttractionInterface {
  _id?: string;
  name: string;
  key: string;
  shortDescription: string;
  description?: string;
  img: string;
  region: string;
  prefecture: string;
  city?: string;
  highlight: boolean;
}
