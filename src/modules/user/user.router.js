import { Router } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { deleteUser, getUserProfile, updateUser } from "./user.controller.js";

const router = Router();

router.get('/', asyncHandler(getUserProfile))

router.put('/', asyncHandler(updateUser))

router.delete('/:id', asyncHandler(deleteUser))

export default router