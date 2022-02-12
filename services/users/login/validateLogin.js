const Joi = require('joi');

const schema = Joi.object().keys({
   email: Joi.string()
    .required()
    .empty()
    .email()
    .messages({
      'string.empty': '"email" is not allowed to be empty',
      'any.required': '"email" is required',
      'string.email': '"email" mus be a valid email',
    }),
    password: Joi.string()
    .required()
    .min(6)
    .max(6)
    .empty()    
    .messages({
      'string.empty': '"password" is not allowed to be empty',
      'string.min': '"password" length must be 6 characters long',
      'string.max': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),  
});

module.exports = { schema };