import * as Joi from "joi";

export const RegisterUserValidation = Joi.object().keys({
  email: Joi.string().required(),
  pass: Joi.string().required(),
});
