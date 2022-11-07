import * as React from 'react';
import {Container} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



export default function GenreFilter() {
    const[genres,setGenres]=useState( [])



    useEffect = useCallback(()=>{
        console.log(genres)
        fetch("http://localhost:8080/films/genres")
            .then(res=>res.json())
            .then((result)=>{
                setGenres(result);
            })
    },[genres])


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
                                <MenuItem /*key={genre.id}*/>
                                    <input type={"radio"} value={genre.id} name={genre}/> {genre.name}
                                </MenuItem>
                            )
                        )}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>






        </Container>

    );
}
