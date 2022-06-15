import express from "express";
import { createRoom, updateRoom, deleteRoom, getRoomById, getAllRooms } from "../controller/room.controller.js"
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", verifyAdmin, createRoom);


// update method
router.put("/:id", verifyAdmin, updateRoom);

// delete method
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

router.get("/:id", getRoomById);


router.get("/", getAllRooms);


export default router;