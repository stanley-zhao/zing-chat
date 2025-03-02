import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unqiue: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            miniLength: 6
        },
        profilePic: {
            type: String,
            default: ""
        }
    },
    { Timestamp: true }
);

const User = mongoose.model('User', userSchema);

export default User;