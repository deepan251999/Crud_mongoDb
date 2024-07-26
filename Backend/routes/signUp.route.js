import express from "express";
import signupUser from "../controllers/signup.controllers.js";

const router = express.Router();

router.post('/signup', signupUser)

export default router;