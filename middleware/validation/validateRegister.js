const joi = require("joi");
const User = require("../../models/userModel");

const validateRegister = async (req, res, next) => {
  const payload = req.body;
  try {
    await validatePayload.validateAsync(payload);
    next();
  } catch (error) {
    console.log(error);
    return res.status(406).send(error.details[0].message);
  }
};

const validatePayload = joi.object({
  username: joi.string().min(3).max(255).required(),
  first_name: joi.string().min(3).max(255).required(),
  last_name: joi.string().min(3).max(255).required(),
  password: joi
    .string()
    .min(5)
    .max(255)
    .required()
    .regex(/^(?=.*[!@#$%^&*])/)
    .message("Password must contain at least one special character"),
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});

module.exports = validateRegister;
