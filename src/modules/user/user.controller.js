import UserModel from "../../../DB/model/user.js";
import { AppError } from '../../utils/AppError.js'

export const getUserProfile = async (req, res) => {
    const user = await UserModel.findAll({
        attributes: ['name', 'email']
    })
    return res.status(200).json({ message: 'Success', user })
}

export const updateUser = async (req, res) => {
    const { id, name, email, password } = req.body;
    const user = await UserModel.findByPk(id);
    if (user == null) {
        return next(new AppError('User Not Found', 404))
    }
    await user.update({ name, password, email });
    return res.status(200).json({
        message: "User information updated successfully",
        user:{
            name:user.name,
            email:user.email,
            password:user.password
        }
    })
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModel.findByPk(id);
    if (!user) {
        return next(new AppError('User Not Found', 404))
    }
    await UserModel.destroy({
        where: {
            id
        }
    })
    return res.status(200).json({ message: "User deleted Successfully" })
}