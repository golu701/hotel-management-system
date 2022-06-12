import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";


import authRoute from "./router/auth.js";
import hotelRoute from "./router/hotel.js";
import roomRoute from "./router/room.js";
import userRoute from "./router/user.js";
import { createError } from "./utils/error.js";
const app = express();
dotenv.config()

try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected");
}
catch (error) {
    throw error;
    // handleError(error)
}

mongoose.connection.on("disconnect", () => {
    console.log("Database disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("Mongodb connected");
})

// under construction
// app.get((req, res, next) => {
//     return createError(404, "Under construction");
// });

// app config
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/auth", authRoute);
app.use("/hotel", hotelRoute);
app.use("/room", roomRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
    return res.status(200).json({ "message": "this is business" })
})

app.listen(8000, () => {
    console.log()
})