import * as React from 'react';
import {Container} from "@mui/material";

import SearchBar from "./HomeComps/SearchBar";
import FilmOverview from "./HomeComps/FilmOverview";


export default function Home() {

    return (
        <Container>

            <FilmOverview/>
        </Container>

    );
}
