import express from "express";
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from "../controller/User.controller.js";
import {verifyAdmin, verifyUser} from "../utils/veifyToken.js";

const router = express.Router();

router.post("/", verifyUser, createUser);

// update method
router.put("/:id", verifyUser, updateUser);

// delete method
router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getUserById);

router.get("/", verifyAdmin, getAllUsers);

export default router;