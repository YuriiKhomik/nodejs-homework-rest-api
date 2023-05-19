const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/contacts/user");

const router = express.Router();

module.exports = router;

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;
