import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch (error) {
        next(error);
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const savedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(savedHotel);
    }
    catch (error) {
        next(error);
    }
}

export const deleteHotel = async (req, res) => {

    try {
        const savedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(savedHotel);
    }
    catch (error) {
        next(error);
    }
}

export const getHotelById = async (req, res) => {

    try {
        const savedHotel = await Hotel.findById(req.params.id)
        res.status(200).json(savedHotel);
    }
    catch (error) {
        next(error);
    }
}

export const getAllHotels = async (req, res) => {

    try {
        const savedHotel = await Hotel.find(req.params.id)
        res.status(200).json(savedHotel);
    }
    catch (error) {
        next(error);
    }
}