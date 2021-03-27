import * as Joi from 'joi';

export const AddAttractionValidator = Joi.object().keys({
  name: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string(),
  region: Joi.string().required(),
  prefecture: Joi.string().required(),
  city: Joi.string(),
  highlight: Joi.boolean().required(),
  category: Joi.boolean().required()
});
