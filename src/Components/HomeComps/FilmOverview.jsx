import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import LocalStorageManager from '../../Service/LocalStorageManager';
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom'


export default function Home() {
    const[Films,setFilms]=useState([])


    function addFilmIdToLocal(id){
        LocalStorageManager.SetFilmId(id);
    }


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

            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
                {Films.map((film)=>(
                        <Grid item xs={3}>
                                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:";left"}} key={film.id}>
                                    <Link onClick={addFilmIdToLocal(film.id) } to='watch' >

                                    id:{film.id}<br/>
                                    film:{film.name}<br/>
                                    length:{film.length}<br/>
                                    </Link>
                                </Paper>


                        </Grid>
                    )
                )}
            </Grid>
        </Container>

    );
}