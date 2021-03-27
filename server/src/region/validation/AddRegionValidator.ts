import * as Joi from 'joi';

export const AddRegionValidator = Joi.object().keys({
  name: Joi.string().required(),
  shortDescription: Joi.string().required(),
  description: Joi.string(),
});
