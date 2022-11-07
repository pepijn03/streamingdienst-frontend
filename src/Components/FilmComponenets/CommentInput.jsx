import * as React from 'react';
import {Container, TextField} from "@mui/material";
import {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function CommentInput (){
    const[text,setText]=useState("")
    const[likes]=useState("0")
    const[film]=useState("1")


    const handleClick=(e)=> {
        e.preventDefault()
        const comment = {text, likes}
        console.log(comment)
        fetch("http://localhost:8080/comments/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(comment)}
        ).then(()=>{
            console.log("new comment added")
        })
    }

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