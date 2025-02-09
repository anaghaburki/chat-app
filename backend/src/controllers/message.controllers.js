import User from "../models/user.models.js";
import Message from "../models/message.models.js";

export const getUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers)

    } catch(erroe) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({message: "Internal Server Error"});

    }

};

export const getMessages = async(req,res)=> {
    try{
        const {id:userToChatId} = req.params
        const myId = req.user._id;

        const messages = await Message.find({
            $or:[
                {senderId:myId, recipientId:userToChatId},
                {senderId:userToChatId, recipientId:myId}
            ]
        })


        res.status(200).json(messages)
    }

    catch (error) {
        console.error("Error in getMessages controller : ", error.message);
        res.status(500).json({message: "Internal Server Error"});

}
};

export const sendMessage = async (req, res) => {
    try{
        const {text, image} = req.body;
        const {id: recipientId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            recipientId,
            text,
            image: imageUrl,
        });

        await newMessage.save();

        //realtime need to: Socket.io

        res.status(201).json(newMessage)

    } catch (error) {
        console.error("Error in sendMessage controller : ", error.message);
        res.status(500).json({message: "Internal Server Error"});

    }
};
