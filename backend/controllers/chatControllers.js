const asyncHandler = require("express-async-handler")
const Chat = require("../Models/chatModel")

const accessChats = asyncHandler(async (req,res) => {
     
    const { UserId } = req.body

    if(!UserId){
        console.log("UserId param not sent with the request")
        return res.sendStatus(400)
    }
    
    var isChat = await Chat.find({
        isGroupChat: false ,
        $and: [
            {$users } ,
            {} ,
        ]
    })

})

module.exports = {accessChats}