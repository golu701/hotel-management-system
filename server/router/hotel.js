import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../controller/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);


// update method
router.put("/:id", verifyAdmin, updateHotel);

// delete method
router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/:id", getHotelById);


router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);


export default router;