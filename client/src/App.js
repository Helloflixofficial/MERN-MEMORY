import { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts";
import Form from "./components/Forms/Form";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import memories from "./images/memories.png";
import React from "react";

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return React.createElement(
        Container,
        { maxWidth: "lg" },
        React.createElement(
            AppBar,
            { className: classes.appBar, position: "static", color: "inherit" },
            React.createElement(
                Typography,
                { className: classes.heading, variant: "h2", align: "center" },
                "Memories"
            ),
            React.createElement("img", {
                className: classes.image,
                src: memories,
                alt: "icon",
                height: "60",
            })
        ),
        React.createElement(
            Grow,
            { in: true },
            React.createElement(
                Container,
                null,
                React.createElement(
                    Grid,
                    { container: true, justifyContent: "space-between", alignItems: "stretch", spacing: 3 },
                    React.createElement(
                        Grid,
                        { item: true, xs: 12, sm: 7 },
                        React.createElement(Posts, { setCurrentId: setCurrentId })
                    ),
                    React.createElement(
                        Grid,
                        { item: true, xs: 12, sm: 4 },
                        React.createElement(Form, { currentId: currentId, setCurrentId: setCurrentId })
                    )
                )
            )
        )
    );
};

export default App;
