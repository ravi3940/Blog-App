import express from "express"
import dbConnection from "./config/dbconnection.js"
import dotenv from "dotenv"
dotenv.config({})
const appp = express()
const PORT = process.env.PORT || 4000
appp.use("/", (req, res) => {

    res.send("this  is  home  page")

})

appp.listen(PORT, () => {
    dbConnection()
    console.log(`srerver  is  run  at  this port  ${PORT}`)
})