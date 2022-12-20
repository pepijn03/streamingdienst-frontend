import * as React from 'react';
import {Container, Button} from "@mui/material";
import {useState, memo, useEffect} from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const CommentView = (props) =>{
    const[liked,setLiked]=useState( false)
    const[disliked,setDisliked]=useState(false)

    const StyledPaper = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        maxWidth: 400,
        color: theme.palette.text.primary,
    }));

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

    //const { data, error, isPending } = useAsync({ promiseFn: loadComments, filmId: 1 })

        return (
            <div>

                <Container>
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
                        <div >

                        </div>
                    </ul>

                </Container>

            </div>
        )

}

export default memo(CommentView) ;