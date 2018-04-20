const
    mongoose = require("mongoose")
;

module.exports = BankAccountSchema;

function BankAccountSchema(additionalFields){
    var schema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "name not provided"]
        },
        accountNumber: {
            type: String,
            required: [true, "account number not provided"]
        },
        bankName: {
            type: String,
            required: [true, "bank name not provided"]
        }
    });
    if (additionalFields) schema.add(additionalFields);
    return schema
}