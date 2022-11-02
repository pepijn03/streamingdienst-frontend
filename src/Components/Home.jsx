import * as React from 'react';
import {Container} from "@mui/material";

import FilmOverview from "./HomeComponents/FilmOverview";
import {useEffect, useState} from "react";


export default function Home() {
    const[Films,setFilms]=useState([])

    useEffect(()=>{
        console.log(Films)
        fetch("http://localhost:8080/home/")
            .then(res=>res.json())
            .then((result)=>{
                setFilms(result);
            })
    },[])


    return (
        <Container>
            <FilmOverview films={Films}/>
        </Container>

    );
}
