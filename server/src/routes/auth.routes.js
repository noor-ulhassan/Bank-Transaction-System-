import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);

// Login Api

router.post("/login", login);

export default router;
