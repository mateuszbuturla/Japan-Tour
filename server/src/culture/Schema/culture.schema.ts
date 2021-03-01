import * as Joi from "joi";
import { OtherDataShema } from "../../Schema/OtherDataShema";

export const AddUpdateCultureSchema = Joi.object().keys({
  name: Joi.string().required(),
  category: Joi.string().required(),
  img: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string().required(),
  otherData: Joi.array().items(OtherDataShema),
});
