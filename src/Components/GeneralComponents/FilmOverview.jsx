 import * as React from 'react';
import {Container, Paper} from "@mui/material";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom'
 import Button from "@mui/material/Button";
 import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
 import Menu from "@mui/material/Menu";
 import MenuItem from "@mui/material/MenuItem";


const FilmOverview= (props) => {
    const[genres,setGenres]=useState( [])


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

                                <div> <h2> {film.name} </h2></div> <br/>
                                <div style={{textAlign: "left"}}> {film.length} min</div> <div style={{textAlign: "right"}}> {film.ageRestriction} </div> <br/>
                                <Button style={{ margin:'5px', textDecoration: "none"}} variant="contained"><Link to={`../watch/${film.id}`} style={{textDecoration: "none", color: "white"}} > watch movie </Link></Button><br/>
                            </Paper>
                        </Grid>
                        )
                    )}
                </Grid>
            </Container>

        );

}

export default FilmOverview;