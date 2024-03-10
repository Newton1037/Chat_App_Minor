const express = require("express")
const {chats} = require("./data/data")
const connectDB = require("./config/db")
const dotenv = require("dotenv")
const colors = require("colors")
const userRoutes = require("./routes/userRoutes")

const app = express()
dotenv.config()
connectDB()

app.use(express.json())  // to accept json data

app.get( "/" , (req,res) => {
    res.send("API is running")
})

app.use("/api/user" , userRoutes)

PORT = process.env.PORT || 5000

app.listen(`${PORT}` , console.log(`Server started on port ${PORT}`.yellow.bold))