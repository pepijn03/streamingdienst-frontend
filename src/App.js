import React, {useState, useEffect} from "react";
import './App.css';
import  axios from "axios";

const Film = () => {
  const FetchFilm = () => {
    axios.get("http://localhost:8080/api/v1/film").then(( res) => {})

    console.log(res);
  }

  useEffect(() => {
    FetchFilm();
  }, [])
}

function App() {
  return (
    <div className="App">
      <Film/>
    </div>
  );
}

export default App;
