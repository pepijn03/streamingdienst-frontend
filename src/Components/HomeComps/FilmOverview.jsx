import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";

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

            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
                {Films.map((filmlist)=>(
                        <Grid item xs={3}>
                            <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:";left"}} key={filmlist.id}>
                                id:{filmlist.id}<br/>
                                film:{filmlist.name}<br/>
                                length:{filmlist.length}<br/>
                            </Paper>
                        </Grid>
                    )
                )}
            </Grid>
        </Container>

    );
}