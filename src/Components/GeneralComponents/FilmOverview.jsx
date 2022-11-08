import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {Component, useEffect} from "react";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom'


const FilmOverview= (props) => {


        return (

            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
                    {props.films.map((film)=>(
                            <Grid item xs={3}>
                                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:";left"}} key={film.id}>
                                    <Link to={`../watch/${film.id}`}>
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

export default FilmOverview;