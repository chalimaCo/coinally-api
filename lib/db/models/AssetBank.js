const
    mongoose = require("mongoose"),
    AssetBankSchema = require("../schemas/AssetBank");
    
module.exports = mongoose.model("AssetBank", AssetBankSchema())