 import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {Component, useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom'
 import Button from "@mui/material/Button";
 import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
 import Menu from "@mui/material/Menu";
 import MenuItem from "@mui/material/MenuItem";


const FilmOverview= (props) => {
    const[genres,setGenres]=useState( [])
    const [filteredFilms, setFilteredFilms]=useState([])


    useEffect(()=>{
        console.log(genres)
        fetch("http://localhost:8080/films/genres")
            .then(res=>res.json())
            .then((result)=>{
                setGenres(result);
            })
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value != null) {

            setFilteredFilms(props.films.filter(film => film.genres.name.includes(e.target.value)))
            Object.fromEntries(Object.entries(props.films).filter(([key]) => key.includes('Name')));
        }
        else{
            setFilteredFilms(props.films)
        }

    };



    return (

            <Container>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" {...bindTrigger(popupState)}>
                                genres
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                {genres.map((genre)=>(
                                        <MenuItem key={genre.id}>
                                            <input type={"radio"} value={genre} onClick={handleChange} name={genre}/> {genre.name}
                                        </MenuItem>
                                    )
                                )}
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>

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