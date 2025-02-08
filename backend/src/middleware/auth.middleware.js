import jwt from "jsonwebtoken"
import User from "../models/user.models.js"

export const protectRoute = async (req, response, next) => {
    try{
        const token = req.cookies.jwt
        if(!token) return response.status(401).json({message: "Unauthorized - No token Provided"});

        const decoded = jwt.verify(token, process.env.JWT_SECRET,)

        if(!decoded){
            return response.status(401).json({message: "Unauthorized - Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return response.status(404).json({message: "User not found"})
        }
        

        req.user = user
        next()


    } catch(error){
        console.log("Error in protectRoute middleware: ", error.message);
        return response.status(500).json({message: "Internal Server Error"});

    }
}