import * as React from 'react';
import {Container, Paper, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Film() {
    const paperStyle={padding:'50px 20px', width: 600, margin:'20px auto'}

    const[name,setName]=useState( '')
    const[length,setlength]=useState('')


    const handleClick=(e)=> {
        e.preventDefault()
        const film = {name, length}
        console.log(film)
        fetch("http://localhost:8080/film/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(film)}
        ).then(()=>{
            console.log("new film added")
        })
    }

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

        </Container>

    );
}
