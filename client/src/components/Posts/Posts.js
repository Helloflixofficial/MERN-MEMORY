import React from 'react'
import Post from "./Post/Post.js"
// import useStyles from "./style.js";
import { useSelector } from "react-redux";


const Posts = () => {
    // const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <>
            <div>YO</div>
            <Post />
        </>
    )
}
export default Posts