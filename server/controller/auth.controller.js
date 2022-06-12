import User from "../models/User.js"
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const salt = bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        await user.save();
        res.status(201).send("User Created");
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) return next(createError(404, "User not found"));
        const isPasswordMatched = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordMatched) {
            const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET);
            const {password, isAdmin, ...otherDetails} = user._doc;
            res.status(200).json(...otherDetails);
        } else {
            return next(createError(400, "Wrong password or username"));
        }
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).send("User Created");
    } catch (error) {
        next(error)
    }
}

