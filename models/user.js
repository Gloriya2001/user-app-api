const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "bloodgp":{type:String,required:true},
        "mobNum":{type:String,required:true},
        "address":{type:String,required:true},
        "pin":{type:String,required:true},
        "district":{type:String,required:true},
        "place":{type:String,required:true},
        "email":{type:String,required:true},
        "userName":{type:String,required:true},
        "password":{type:String,required:true}

    }
)

let usermodel = mongoose.model("users",schema);
module.exports = {usermodel}
