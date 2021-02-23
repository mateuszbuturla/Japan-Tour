import * as Joi from "joi";

export const OtherDataShema = Joi.object().keys({
  title: Joi.string().required(),
  value: Joi.string().required(),
});
