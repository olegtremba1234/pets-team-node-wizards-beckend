const Joi = require("joi");

const register = Joi.object({
  name: Joi.string().min(2).max(30),
  email: Joi.string().email(),
  password: Joi.string().pattern(/^\S+$/).min(7).max(32),
  city: Joi.string(),
  phone: Joi.string().pattern(/^\+380\d{9}$/),
});

module.exports = {
  register,
};
