import { DataTypes } from "sequelize";
import { sequelize } from "../connection";


const UserModel = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    confirmEmail:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    role:{
        type:DataTypes.ENUM('user','admin'),
        defaultValue:false,
        allowNull:false
    }
})

export default UserModel