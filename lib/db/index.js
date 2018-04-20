const
    mongoose = require("mongoose"),
    dbUrl = "mongodb://127.0.0.1",
    Asset = require("./models/Asset"),
    AssetBank = require("./models/AssetBank"),
    Transaction = require("./models/Transaction"),
    User = require("./models/User")
;
module.exports = {
    Asset,
    Transaction,
    User
}
mongoose.connect(dbUrl, function (err) { console.log("connected to db") });
mongoose.connection.on("error", function onError(err) {
    console.log("\nmongoose connection error: ", err, "\n");
    process.exit(1)
});