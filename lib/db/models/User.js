const
    mongoose = require("mongoose"),
    AssetBankSchema = require("../schemas/AssetBank"),
    verificationDetailsSchema = mongoose.Schema({
        type: {
            type: String,
            required: [true, "no type provided"]
        },
        value: {
            type: String,
            required: [true, "no type provided"]
        }
    }),
    userSchema = mongoose.Schema({
        firstName: {
            type: String,
            required: [true, "first name not provided"]
        },
        lastName: {
            type: String,
            required: [true, "first name not provided"]
        },
        status: {
            type: String,
            enum: ["active", "banned"]
        },
        phoneNumber: String,
        emailAddress: {
            type: String,
            unique: true,
            validate: {
                validator: function validateEmail(val) {
                    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(val);
                },
                message: "Invalid email address"
            }
        },
        assetBanks: [new AssetBankSchema({
            bankAccounts: {
                verified: {
                    type: Boolean,
                    default: false
                },
                verificationDetail: verificationDetailsSchema
            }
        })],
        verificationDetails: [verificationDetailsSchema],
        transactions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Transaction'
        }],
        bvn: {
            type: String,
            validate: {
                validator: function validateBvn(val) {
                    return val.length === 11
                }
            }
        }
    })
;

module.exports = mongoose.model("User", userSchema);