import User from "../models/User.js";

export const createUser = async (req, res, next) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const savedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(savedUser);
    }
    catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res) => {

    try {
        const savedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(savedUser);
    }
    catch (error) {
        next(error);
    }
}

export const getUserById = async (req, res) => {

    try {
        const savedUser = await User.findById(req.params.id)
        res.status(200).json(savedUser);
    }
    catch (error) {
        next(error);
    }
}

export const getAllUsers = async (req, res) => {

    try {
        const savedUser = await User.find(req.params.id)
        res.status(200).json(savedUser);
    }
    catch (error) {
        next(error);
    }
}