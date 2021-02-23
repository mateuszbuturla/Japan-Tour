import * as Joi from "joi";
import { OtherDataShema } from "../../Schema/OtherDataShema";

export const AddUpdateCitySchema = Joi.object().keys({
  name: Joi.string().required(),
  region: Joi.string().required(),
  description: Joi.string().required(),
  img: Joi.string().required(),
  otherData: Joi.array().items(OtherDataShema),
});
