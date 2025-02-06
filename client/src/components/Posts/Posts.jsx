import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post"; // Ensure correct import
import useStyles from "./style"; // Ensure correct import

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts || []); // Ensure posts is an array
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
