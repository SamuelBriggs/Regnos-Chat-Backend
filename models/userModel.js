const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
        userName: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        password: {
            type : String,
            required : true
        },
        profilePic: String

    },
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("users", userSchema);