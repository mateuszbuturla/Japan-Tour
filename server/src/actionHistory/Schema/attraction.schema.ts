import * as Joi from "joi";

export const ActionHistorySchema = Joi.object().keys({
  section: Joi.string().required(),
  name: Joi.string().required(),
  url: Joi.string().required(),
  author: Joi.string().required(),
  date: Joi.string().required(),
  action: Joi.string().required(),
});
