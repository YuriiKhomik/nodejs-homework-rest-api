const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/contacts/user");

const router = express.Router();

module.exports = router;

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// sign in
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
