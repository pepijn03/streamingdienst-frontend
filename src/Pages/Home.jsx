import * as React from 'react';
import {Container} from "@mui/material";

import FilmOverview from "../Components/GeneralComponents/FilmOverview";
import GenreFilter from "../Components/HomeComponents/GenreFilter";
import {useEffect, useState, useCallback } from "react";


export default function Home() {
    const[Films,setFilms]=useState([])

    useEffect (()=>{
        console.log(Films)
        fetch("http://localhost:8080/films/")
            .then(res=>res.json())
            .then((result)=>{
                setFilms(result);
            })
    },[])


    return (
        <Container >

            <FilmOverview films={Films} />
        </Container>

    );
}
