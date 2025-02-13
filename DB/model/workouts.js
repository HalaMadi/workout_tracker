import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import UserModel from "./user.js";

const WorkoutModel = sequelize.define('Workout', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    intensity: {
        type: DataTypes.ENUM('Low', 'Medium', 'High'),
        allowNull: false,
    },
});
UserModel.hasMany(WorkoutModel);
export default WorkoutModel

