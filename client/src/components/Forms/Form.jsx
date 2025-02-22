import { useState } from 'react';
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from 'react-file-base64';
import useStyles from './style.js';
import { useDispatch } from 'react-redux';
import { createPost } from "../../actions/posts.js"

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFiles: ''
    });

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    };
    const clear = (e) => {
        e.preventDefault();
        console.log(postData);
    };

    return (<>
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating Memory</Typography>
                <TextField
                    name='Creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name='Title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name='Message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name='Tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFiles: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>
                    Submit
                </Button>
                <Button variant='contained' color='secoundary' size='small' onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    </>
    );
};

export default Form;
