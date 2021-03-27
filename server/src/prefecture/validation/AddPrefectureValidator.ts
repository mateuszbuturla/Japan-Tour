import * as Joi from 'joi';

export const AddPrefectureValidator = Joi.object().keys({
  name: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string(),
  region: Joi.string().required(),
  highlight: Joi.boolean().required(),
});
