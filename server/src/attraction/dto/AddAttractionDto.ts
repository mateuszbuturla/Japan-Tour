export default interface AddAttractionDto {
  name: string;
  shortDescription: string;
  description?: string;
  region: string;
  prefecture: string;
  city?: string;
  highlight: boolean;
}
