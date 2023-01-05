/*
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





            </div>

        )

}

export default memo(CommentView) ;*/
