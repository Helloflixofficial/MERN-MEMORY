import React from 'react'
import useStyles from "./styles.js"
const Post = () => {
    const classes = useStyles();
    return (
        <div className={classes.ready}>Post</div>
    )
}
export default Post