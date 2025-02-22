import { Container, AppBar, Typography, Grow } from "@mui/material";
import Grid from '@mui/material/Grid2';
import memoriesImage from "./Images/memories.png"
import Posts from "./components/Posts/Posts"

export const App = () => {

    return (
        <>
        <Container maxWidth="lg">
            <AppBar  position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Memories
                    <img src={memoriesImage} alt="memories" height="60" />
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                        <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                           <h1>hello sire</h1>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container >
        </>
    );
}
