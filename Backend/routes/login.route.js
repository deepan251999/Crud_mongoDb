import express from "express";
import { LoginControllers } from "../controllers/login.controllers.js";

const router = express.Router();

router.post('/login', LoginControllers)

export default router;