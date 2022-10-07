import React, {useState, useEffect} from "react";
import ButtonAppBar from "./Components/AppBar";
import Film from "./Components/Film";
import Home from "./Components/Home";
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
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
