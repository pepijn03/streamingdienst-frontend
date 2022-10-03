import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Container, Paper} from "@mui/material";
import {useEffect, useState} from "react";

export default function Film() {
    const paperStyle={padding:'50px 20px', width: 600, margin:'20px auto'}

    const[name,setName]=useState( '')
    const[length,setlength]=useState('')
    const[filmlist,setFilmlist]=useState([])
    const[film, setFilm]=useState('')

    const handleClick=(e)=> {
        e.preventDefault()
        const film = {name, length}
        console.log(film)
        fetch("http://localhost:8080/film/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(film)}
        ).then(()=>{
            console.log("new filmlist added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/film/GetById?id=" + filmlist.id)
    })

    useEffect(()=>{
        fetch("http://localhost:8080/film/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setFilmlist(result);
            })
    },[])


    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="name" variant="outlined" fullWidth={true}
                               value={name}
                               onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="length" variant="outlined" fullWidth={true}
                               value={length}
                               onChange={(e)=>setlength(e.target.value)}/>
                </Box>
                <Button variant="contained" onClick={handleClick}>submit</Button>

            </Paper>

            <Paper elevation={3} style={paperStyle}>
                {filmlist.map((filmlist)=>(
                        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:";left"}} key={filmlist.id}>
                            id:{filmlist.id}<br/>
                            student:{filmlist.name}<br/>
                            length:{filmlist.length}<br/>
                        </Paper>
                    )
                )}
                <Button variant="contained" onClick={handleClick}>get</Button>
            </Paper>
        </Container>

    );
}
