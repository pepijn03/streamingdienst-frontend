import * as React from 'react';
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import FilmOverview from "./GeneralComponents/FilmOverview";

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
        <FilmOverview films={Films} />
        </Container>
    );
}