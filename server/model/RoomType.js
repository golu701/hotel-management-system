const mongoose = require("mongoose");

const RoomTypeSchema = new mongoose.Schema({
    roomsList: [
        {
            roomId: {
                type: String,
            }
        }
    ],
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    totalRooms: {
        type: String,
        default: 0
    },
    bedSize: {
        type: String,
        required: true
    },
    balcony: {
        type: Boolean
    },
    airCondition: {
        type: Boolean
    },
    flatScreeTv: {
        type: Boolean
    },
    freeWifi: {
        type: Boolean
    },
    refrigerator: {
        type: Boolean
    },
    desk: {
        type: Boolean
    },
    fan: {
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Room", RoomTypeSchema);
