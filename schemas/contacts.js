const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": `missing required name field` }),
  email: Joi.string()
    .required()
    .messages({ "any.required": `missing required email field` }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": `missing required phone field` }),
});

const updateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
}).min(1);

module.exports = {
  addSchema,
  updateSchema,
};
