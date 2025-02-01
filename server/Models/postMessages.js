import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    title: "String",
    message: "String",
    creator: "String",
    tags: ["String"], // an array of String
    selectedFiles: String, //Need to Convert this in BASE64
    likeCount: {
        type: Number,
        default: 0
    },
    CreatedAt: {
        type: Date,
        default: new Date()
    }
});

export const PostMessage = mongoose.model('PostMessage', postSchema);