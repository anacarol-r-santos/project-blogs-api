const Joi = require('joi');

const schemaPosts = Joi.object().keys({
    title: Joi.string()
      .empty()
      .required()
      .messages({
        'string.empty': '"title" is required',
        'any.required': '"title" is required',
      }),
    content: Joi.string()
      .required()
      .empty()    
      .messages({
        'string.empty': '"content" is required',
        'any.required': '"content" is required',
      }),
      categoryIds: Joi.array()
      .required()
      .empty()    
      .messages({
        'string.empty': '"categoryIds" is required',
        'any.required': '"categoryIds" is required',
      }),
  });

// Auxiliada por Ricardo Antonio T13-C
module.exports = { schemaPosts };