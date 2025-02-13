import WorkoutModel from '../../../DB/model/workouts.js';

export const createWorkouts = async (req, res) => {
    const { name, description, duration, intensity } = req.body;
    const workout = await WorkoutModel.create({ name, description, duration, intensity, UserId: req.id });
    return res.status(201).json({ message: 'Workout created successfully', workout });
};

export const getWorkouts = async (req, res) => {
    const workouts = await WorkoutModel.findAll();
    return res.status(200).json({ message: 'Workouts retrieved successfully', workouts });
};

export const getWorkoutById = async (req, res) => {
    const { id } = req.params;
    const workout = await WorkoutModel.findByPk(id);
    if (!workout) {
        return next(new AppError('Workout not found', 404))
    }
    return res.status(200).json({ message: 'Workout retrieved successfully', workout });
};

export const updateWorkoutById = async (req, res) => {
    const { id } = req.params;
    const { name, description, duration, intensity } = req.body;
    const workout = await WorkoutModel.findByPk(id);
    if (!workout) {
        return next(new AppError('Workout not found', 404))
    }
    await workout.update({ name, description, duration, intensity });
    return res.status(200).json({ message: 'Workout updated successfully', workout });
};

export const deleteWorkoutById = async (req, res) => {
    const { id } = req.params;
    const workout = await WorkoutModel.findByPk(id);
    if (!workout) {
        return next(new AppError('Workout not found', 404))
    }
    await workout.destroy();
    return res.status(200).json({ message: 'Workout deleted successfully' });
};
