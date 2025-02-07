
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Grid } from '@mui/material/Grid';
import Post from "./Post/Post.jsx";
// import useStyles from "./style.js";

export const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts || []);
  // const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid  container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid> 
  );
};