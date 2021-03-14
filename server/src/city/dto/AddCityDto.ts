export default interface AddCityDto {
  name: string;
  shortDescription: string;
  description?: string;
  region: string;
  prefecture: string;
  highlight: boolean;
}
