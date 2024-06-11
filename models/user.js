const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "name": String,
        "dob": String,
        "bloodgp": String,
        "mobNum": String,
        "address": String,
        "pin": String,
        "district": String,
        "place": String,
        "email": String,
        "userName": String,
        "password": String

    }
)

let usermodel = mongoose.model("users",schema);
module.exports = {usermodel}
