import * as React from 'react';
import {Container, Paper, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
} from "react-router-dom";


export default function GenreFilter() {
    const paperStyle={padding:'50px 20px', width: 600, margin:'20px auto'}
    const { id } = useParams();
    const[genres,setGenres]=useState( '')



    useEffect(()=>{
        console.log(genres)
        fetch("http://localhost:8080/films/genres" + id)
            .then(res=>res.json())
            .then((result)=>{
                setGenres(result);
            })
    },)


    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                {film.id}
                {film.name}

            </Paper>

        </Container>

    );
}
