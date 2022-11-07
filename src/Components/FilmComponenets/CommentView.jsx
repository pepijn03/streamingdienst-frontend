
import * as React from 'react';
import {Container} from "@mui/material";
import {Component} from "react";


class CommentView extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
        this.state ={
            Comments:[]
        }
    }

    componentDidMount() {
        this.setState({ Comments: this.props.Comments });
    }

    getComments(){
        return this.state.Comments;
    }

    /*like(commentid){

    }*/

    render(){
        return(
            <Container>
                <ul>
                    {this.getComments().map((comment)=>(
                        <li /*key={comment}*/>
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

}

export default CommentView;