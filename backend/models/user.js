import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    RegNo: { type: String  , unique : true},
    Name: { type: String, required: true },
    Email: { type: String , unique : true },
    password:{type:String, required: true}
});

export const User = mongoose.model('User', userSchema);