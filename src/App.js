import React, {useState, useEffect} from "react";
import ButtonAppBar from "./Components/AppBar";
import Film from "./Components/Film";
import './App.css';

function App() {
  return (
    <div className="App">
        <ButtonAppBar/>
        <Film/>
    </div>
  );
}

export default App;
