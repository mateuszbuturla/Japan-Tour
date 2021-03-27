import * as Joi from 'joi';

export const AddCityValidator = Joi.object().keys({
  name: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string(),
  region: Joi.string().required(),
  prefecture: Joi.string().required(),
  highlight: Joi.boolean().required(),
});
