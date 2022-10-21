import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {Link, useParams} from 'react-router-dom'
import FilmOverview from "./HomeComponents/FilmOverview";

export default function Home() {
    const[Films,setFilms]=useState([])
    const { query } = useParams();

    useEffect(()=>{
        console.log(Films)
        fetch("http://localhost:8080/films/find/" + query)
            .then(res=>res.json())
            .then((result)=>{
                setFilms(result);
            })
    },[])

    return (

        <Container>
            <FilmOverview data={Films}/>
        </Container>

    );
}