import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js"

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {

        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } });

        }
        catch (err) {
            next(err);
        }

        res.status(200).json(savedRoom);

    } catch (err) {
        next(err);
    }
}



export const updateRoom = async (req, res, next) => {
    try {
        const savedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(savedRoom);
    }
    catch (error) {
        next(error);
    }
}

export const deleteRoom = async (req, res) => {
    const hotelId = req.params.hotelid;
    try {
        const savedRoom = await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id }
            });
        }
        catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    }
    catch (error) {
        next(error);
    }
}

export const getRoomById = async (req, res) => {

    try {
        const savedRoom = await Room.findById(req.params.id)
        res.status(200).json(savedRoom);
    }
    catch (error) {
        next(error);
    }
}

export const getAllRooms = async (req, res) => {

    try {
        const savedRoom = await Room.find(req.params.id)
        res.status(200).json(savedRoom);
    }
    catch (error) {
        next(error);
    }
}