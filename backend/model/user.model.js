import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
})


export default mongoose.model("user", UserSchema)
