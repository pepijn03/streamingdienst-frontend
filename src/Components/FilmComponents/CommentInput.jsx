import * as React from 'react';
import {Container, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CommentView from ".//CommentView";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";


const CommentInput = (props) =>{
    const[liked,setLiked]=useState( false)
    const[disliked,setDisliked]=useState(false)
    const[text,setText]=useState("")
    const[Comments,setComments]=useState( props.comments)

    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
    }));



    const handleClick= async (e) => {
        e.preventDefault()
        const film = {id: props.filmId};
        const comment = {text, film}
        console.log(comment)

        await fetch("http://localhost:8080/comments/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(comment)
            }
        ).then(() => {
            // clear all input values in the form
            setText('');
        }).then(res => res.json()
        ).then((result)=>{
            setComments(result);
        })
    }

    function updateComment(id, likes){
        let comment = {id, likes}
        console.log(comment)
        fetch("http://localhost:8080/comments/like",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(comment)}
        ).then(()=>{
            console.log("comment likes updated")
        })
    }

    const like = (id, likes) =>{
        updateComment(id, likes + 1)
        setDisliked(false)
        setLiked(true)
    }

    const dislike = (id, likes) =>{
        updateComment(id, likes - 1)
        setDisliked(true)
        setLiked(false)
    }


    return(
    <div>
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


        <ul>
            {props.comments.map((comment)=>(
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2} key={comment.id}>
                        <Grid item>
                            <Avatar>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>{comment.text}</Typography>
                            <Typography> <Button style={{color: "red"}} disabled={disliked} onClick={() => dislike(comment.id, comment.likes)}> - </Button> {comment.likes} <Button style={{color: "green"}} disabled={liked} onClick={() => like(comment.id, comment.likes)}> + </Button> </Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
            ))}
            </ul>
        </Container>
    </div>

    );
}
export default CommentInput;