import React, {useState, useEffect} from "react";
import ButtonAppBar from "./Components/GeneralComponents/AppBar";
import Film from "./Pages/Film";
import Home from "./Pages/Home";
import SearchResult from "./Pages/SearchResult"
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (

    /*<div className="App">
        <ButtonAppBar/>
        <Film/>
    </div>*/

    <Router>
        <div className="App">
            <ButtonAppBar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/watch/:id' element={<Film/>}/>
                <Route exact path='/search/:query' element={<SearchResult/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
