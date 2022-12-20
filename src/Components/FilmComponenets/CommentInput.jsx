import * as React from 'react';
import {Container, TextField} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CommentInput = (props) =>{

    const[text,setText]=useState("")

    const handleClick= async (e) => {
        e.preventDefault()
        const film = parseInt(props.filmId);
        const comment = {text, film}
        console.log(comment)


        props.comments = await fetch("http://localhost:8080/comments/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(comment)
            }
        ).then(() => {
            // clear all input values in the form
            setText('');
        }).then(res => res.json())
    }

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); // prevent page refresh

        // clear all input values in the form
        setText('');
    };

    return(
        <Container>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="text" variant="outlined" fullWidth={true} placeholder={"put your comment here"}
                           value={text}
                           onChange={(e)=>setText(e.target.value)}
                />
            </Box>
            <Button variant="contained" onClick={handleClick}>submit</Button>
        </Container>
    );
}
export default CommentInput;