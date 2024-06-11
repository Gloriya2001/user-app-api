const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {usermodel} = require("./models/user")


const app = express()
app.use(cors())
app.use(express.json())

app.post("/add", (req, res) => {

   // res.send("success")

   let input = req.body
   //console.log(input)
   let user = new usermodel(input)//remember that new is here
   user.save()
    console.log(user)
    res.json({"status":"success"})
})

app.get("/view", (req, res) => {

    res.send("view")

})


app.listen(8080,()=>{


    console.log("server started")

})