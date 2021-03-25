import * as Joi from 'joi';

export const AddCategoryValidator = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string(),
});
