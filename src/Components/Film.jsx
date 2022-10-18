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


export default function Film() {
    const paperStyle={padding:'50px 20px', width: 600, margin:'20px auto'}
    const { id } = useParams();
    const[film,setFilm]=useState( '')



    useEffect(()=>{
        console.log(film)
/*        var id = LocalStorageManager.GetFilmId();*/

        fetch("http://localhost:8080/films/" + id)
            .then(res=>res.json())
            .then((result)=>{
                setFilm(result);
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
