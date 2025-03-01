import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRrouter from "./Routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRrouter);
const URL = 'mongodb+srv://helloflixofficial:helloflixofficial@cluster0.fzcv7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;
mongoose.connect(URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
  })
  .catch((error) => console.log(error.message));