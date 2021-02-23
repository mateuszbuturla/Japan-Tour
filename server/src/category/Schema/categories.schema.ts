import * as Joi from "joi";

export const AddUpdateCategorySchema = Joi.object().keys({
  title: Joi.string().required(),
  section: Joi.string().required(),
});
