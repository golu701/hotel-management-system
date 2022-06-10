import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../controller/hotel.controller.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

router.post("/", createHotel);


// update method
router.put("/:id", updateHotel);

// delete method
router.delete("/:id", deleteHotel);

router.get("/:id", getHotelById);


router.get("/", getAllHotels);


export default router;