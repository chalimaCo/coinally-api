const
    mongoose = require("mongoose"),
    BankAccountSchema = require("./bankAccount")
;

module.exports = AssetBank;

function AssetBank(extensions){
    let schema = new mongoose.Schema({
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Asset",
        },
        bankAccount: new BankAccountSchema(extensions && extensions.bankAccount),
        addressUrl: String
    });

    schema.virtual("address")
        .get(function () { return this.addressUrl || this.bankAccount })
    ;
    
    schema.post("validate", function checkForAddress(next) {
        if (!(this.address || this.bankAccount)) this.invalidate("address", "address not provided");
        else if (this.address && this.bankAccount) this.invalidate("address", "multiple addresses provided");
        return next()
    });
    return schema
}