
import * as React from 'react';
import {Container, Button} from "@mui/material";

const CommentView = (props) =>{

    const rotation={transform: [{rotate: '-180deg'}]}

    function updateComment(id, likes){
        const comment = {id, likes}
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
    }

    const dislike = (id, likes) =>{
        updateComment(id, likes - 1)
    }

        return(
            <Container>
                <ul>
                    {props.comments?.map((comment)=>(
                        <li key={comment.id}>
                            {comment.text}
                            {comment.likes}
                            <Button onClick={like(comment.id, comment.likes)}> ︿ </Button>
                            <Button  onClick={dislike(comment.id, comment.likes)}> ﹀ </Button>
                        </li>
                        ))}
                    <div >

                    </div>
                </ul>

            </Container>
        );

}

export default CommentView;