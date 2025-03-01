import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    title: "String",
    message: "String",
    creator: "String",
    tags: ["String"],
    selectedFiles: String,
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