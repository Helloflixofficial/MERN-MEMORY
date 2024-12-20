import React from 'react'
import Post from "./Post/Post.js"
import useStyles from "./style.js";

const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.ready}>YO</div>
            <Post />
        </>
    )
}

export default Posts