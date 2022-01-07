const mongoose = require("mongoose");

const MoneyTransactionSchema = new mongoose.Schema({
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: {
            type: String,
            required: true
        }
    },
    amount: {
        type: String,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    room: {
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RoomTypes"
        },
        number: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("MoneyTransaction", MoneyTransactionSchema);
