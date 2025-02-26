import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment"
import useStyles from "./styles.js"
const Post = (post) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6" >{post.creator}</Typography>
                <Typography variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
            </div>
        </Card>
    )
}
export default Post