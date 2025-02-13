import bcrypt from 'bcryptjs'
import UserModel from "../../../DB/model/user.js";
import jwt from 'jsonwebtoken'


export const Register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPass = bcrypt.hashSync(password, 8)
    await UserModel.create({ name, email, password: hashedPass });
    return res.status(201).json({ message: 'User Added Successfully...' })
}

export const Login = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
        where: { email: email }
    })
    if (user == null) {
        return res.status(404).json({ message: 'Invalid Email!' })
    }
    const check = await bcrypt.compareSync(password, user.password);
    if (check == false) {
        return res.status(400).json({ message: 'Invalid Password!' })
    }
    const token = jwt.sign({ id: user.id, name: user.name, role: user.role }, 'HalaMadi')
    return res.status(200).json({ message: 'Success', token })
}