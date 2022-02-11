const Joi = require('joi');

const schema = Joi.object().keys({
    displayName: Joi.string()
        .empty()
        .min(8)
        .required(),
    email: Joi.string()
        .required()
        .empty()
        .email()
        .messages({
            'string.empty': '"email" is required',
            'string.required': '"email" is required',
            'string.email': '"email" must be a valid email',
        }),
    password: Joi.string()
        .required()
        .min(6)
        .max(6)
        .empty()
        .messages({
            'string.empty': '"password" is required',
            'string.min': '"password" length must be 6 characters long',
            'string.max': '"password" length must be 6 characters long', 
            'string.required': '"password" is required',
        }),
});

// Auxiliada por Ricardo Antonio T13-C
module.exports = { schema };