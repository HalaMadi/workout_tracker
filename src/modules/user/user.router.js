import { Router } from "express";
import UserModel from "../../../DB/model/user.js";


const router = Router();

router.get('/', async (req, res) => {
    const user = await UserModel.findAll({
        attributes: ['name', 'email']
    })
    return res.status(200).json({ message: 'Success', user })
})

export default router