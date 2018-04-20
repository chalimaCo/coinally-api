const
    mongoose = require("mongoose"),
    assetSchema =  mongoose.Schema({
        type: {
            type: String,
            enum: ["digital", "fiat", "card"],
            required: [true, "type not specified"],
        },
        name: {
            type:String,
            required: [true, "name not provided"]
        },
        imageUrl: String,
        paymentAddress: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "AssetBank"
        }]
    })
;

module.exports = mongoose.model("Asset", assetSchema)