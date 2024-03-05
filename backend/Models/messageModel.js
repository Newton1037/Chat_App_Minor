const mongoose = require("mongoose")

const messageModel = mongoose.Schema(
    {
       senders: {type: mongoose.Schema.Types.ObjectId , ref: "User"} , 
       content: {type: mongoose.Schema.Types.ObjectId , trim: true} ,
       chat: {type: mongoose.Schema.Types.ObjectId , ref: "User"} ,
    } ,
    {
        timestamps: true , 
    }
)

const Message = mongoose.model("Message" , messageModel)

module.exports = Message