import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CommentInput from "./FilmComponenets/CommentInput";
import CommentView from "./FilmComponenets/CommentView";


export default function Film() {
    const { id } = useParams();
    const[film,setFilm]=useState( '')
    const[Comments, setComments]=useState([])


    useEffect(()=>{
        console.log(film)
        fetch("http://localhost:8080/films/" + id)
            .then(res=>res.json())
            .then((result)=>{
                setFilm(result);
                setComments(result.Comments)
            })
    },[])

    const paperStyle={padding:'50px 20px', width: 600, margin:'20px auto'}

    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                {film.name}
            </Paper>
            <CommentInput/>
            <CommentView Comments = {Comments}/>

        </Container>

    );
}
