import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import SearchBar from "./SearchBar";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#009999', color:'#ffffff', textDecoration:'none'}}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to={'../'}>
                            Home
                        </Link>
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <div className="search">
                            <SearchBar/>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
