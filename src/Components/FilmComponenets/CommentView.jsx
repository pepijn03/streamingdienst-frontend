
import * as React from 'react';
import {Container} from "@mui/material";
import {Component} from "react";


const CommentView = (props) =>{

        return(
            <Container>
                <ul>
                    {props.comments?.map((comment)=>(
                        <li key={comment.id}>
                            {comment.text}
                            {/*<button onClick={comment.id}> like </button>
                            <button onClick={}> dislike </button>*/}
                        </li>
                        ))}
                    <div >

                    </div>
                </ul>

            </Container>
        );

}

export default CommentView;