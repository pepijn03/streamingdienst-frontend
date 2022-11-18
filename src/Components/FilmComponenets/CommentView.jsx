
import * as React from 'react';
import {Container, Button} from "@mui/material";
import {useState, memo } from "react";

const CommentView = (props) =>{
    const[liked,setLiked]=useState( false)
    const[disliked,setDisliked]=useState(false)


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
            <Container>
                <ul>
                    {props.comments?.map((comment)=>(
                        <li key={comment.id}>
                            {comment.text}
                            {comment.likes}
                            <Button disabled={liked} onClick={() => like(comment.id, comment.likes)}> ︿ </Button>
                            <Button disabled={disliked} onClick={() => dislike(comment.id, comment.likes)}> ﹀ </Button>
                        </li>
                        ))}
                    <div >

                    </div>
                </ul>

            </Container>
        );

}

export default memo(CommentView) ;