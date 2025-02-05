import { useEffect } from "react";
import Form from "./components/Forms/Form.js";
import Posts from "./components/Posts/Posts.js";
import memoriesImage from './Images/memories.png';
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts.js'
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
export const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        dispatch(getPosts);
    }, [dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.AppBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                    <img className={classes.image} src={memoriesImage} alt="memories" height="60" />
                </Typography>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container >
    )
}
export default App;