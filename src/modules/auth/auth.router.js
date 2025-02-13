import { Router } from "express"
import { Login, Register } from "./auth.controller.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import validation from "../../middleware/validation.js";
import { loginSchema, registerSchema } from "./auth.validation.js";


const router = Router();

router.post('/register', validation(registerSchema),asyncHandler(Register))

router.post('/login',validation(loginSchema), asyncHandler(Login))

export default router