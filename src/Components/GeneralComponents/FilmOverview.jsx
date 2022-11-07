import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {useCallback, useEffect, useState, Component} from "react";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom'


class Home extends Component {


    constructor(props){
        super(props);
        console.log(this.props);
        this.state ={
            Films:[]
        }
        this.setState({ Films: this.props.films });
    }


    getFilms(){
        return this.state.Films;
    }


    render() {

        return (

            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
                    {this.getFilms().map((film)=>(
                            <Grid item xs={3}>
                                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:";left"}} key={film.id}>
                                    <Link to={`watch/${film.id}`}>

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
}

export default Home;