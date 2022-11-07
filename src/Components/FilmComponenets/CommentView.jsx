
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
        //this.setState({ Comments: this.props.comments });
    }

    componentDidMount() {
        this.setState({ Comments: this.props.Comments });
    }


    getComments(){
        return this.state.Comments;
    }

    render(){
        return(
            <Container>
                <ul>
                    {this.getComments().map((comment)=>(
                        <li key={comment}>
                            {comment.text}
                        </li>
                        )
                    )
                    }

                    <div >

                    </div>
                </ul>

            </Container>
        );
    }

}

export default CommentView;