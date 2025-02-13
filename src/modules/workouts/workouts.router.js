import { Router } from 'express';
import { asyncHandler } from '../../utils/asyncHandler.js';
import auth from '../../middleware/auth.js';
import {
    createWorkouts,
    getWorkouts,
    getWorkoutById,
    updateWorkoutById,
    deleteWorkoutById
} from './workouts.controller.js';

const router = Router();

router.post('/', auth(), asyncHandler(createWorkouts));

router.get('/', asyncHandler(getWorkouts));

router.get('/:id', asyncHandler(getWorkoutById));

router.put('/:id', auth(), asyncHandler(updateWorkoutById));

router.delete('/:id', auth(), asyncHandler(deleteWorkoutById));

export default router;
