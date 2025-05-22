import  jwt  from "jsonwebtoken";
import { User } from "../models/user.js";
import bcrypt from 'bcrypt';


export const register = async (req, res) => {
    try {
        const {RegNo, Name, Email, password } = req.body;
        if(!RegNo || !Name || !Email || !password) {
            return res.status(403).json({
                success:false,
                message:"All Fields are required"
            })
        }
        const  user = await User.findOne({RegNo});
        if(user) {
            return res.status(403).json({
                success:false,
                message:"User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            RegNo,
            Name,
            Email,
            password: hashedPassword

        })
        return res.status(201).json({
            success:true,
            message:"User created successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

export const login  = async (req, res) =>{
   try {

    const {RegNo, Email, password} = req.body
    if(!RegNo || !Email || !password) {
            return res.status(403).json({
                success:false,
                message:"All Fields are required"
            })
        }
        const user = await User.findOne({RegNo}) 
        if (!user){
            return res.status(403).json({
                success:false,
                message:"Incorrect email or password"
            })
        }
        const isPasswordMatch =await bcrypt.compare(password, user.password)
        if (!password){
            return res.status(403).json({
                success:false,
                message:"wrong credentials "
            })
        }
        const token = await jwt.sign({userId:user._id},  process.env.SECRET_KEY, {expiresIn: '1d'});


        return res.status(200)
        .cookie('token', token,{
            httpOnly:true,
            sameSite:"strict", 
            maxAge:24*60*60*1000,
        })
        .json({
            success:true,
            message:`welcome back ${user.Name}`
        })
   } catch (error) {
    
   }
}
export const logout = async(req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            success:true,
            message: "user logout successfully..",
        })
    } catch (error) {
        
    }
}