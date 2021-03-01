import * as Joi from "joi";
import { OtherDataShema } from "../../Schema/OtherDataShema";

export const AddUpdateAttractionSchema = Joi.object().keys({
  name: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string().required(),
  region: Joi.string().required(),
  city: Joi.string().required(),
  category: Joi.string().required(),
  highlighted: Joi.boolean().required(),
  img: Joi.string().required(),
  otherData: Joi.array().items(OtherDataShema),
});
