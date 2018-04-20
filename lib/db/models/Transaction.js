const
    mongoose = require("mongoose"),
    transactionSchema = mongoose.Schema({
        date: {
            type: Date,
            required: [true, "no date provided"],
            default: Date.now
        },
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Asset",
            required: [true, "from not provided"]
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Asset",
            required: [true, "to not provided"]
        },
        paymentAddress: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AssetBank"
        },
        status: {
            type: String,
            enum: ["completed", "failed", "pending"]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "user not provided"]
        }
    })
;
module.exports = mongoose.model("Transaction", transactionSchema)