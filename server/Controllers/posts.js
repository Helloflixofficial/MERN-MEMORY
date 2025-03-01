import { PostMessage } from "../Models/postMessages.js";
export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        console.log(postMessage);
        res.status(200).json(postMessage);
    } catch (error) {
        res.ststus(404).json({ message: error.message });
    }
};


export const createPosts = async (req, res) => {
    const Body = res.body;
    const newPost = new PostMessage(Body)
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
};