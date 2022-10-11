import React, {useEffect, useState} from 'react'
import Button from "@mui/material/Button";


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("")

    const[Films,setFilms]=useState([])

    useEffect(()=>{
        console.log(Films)
        fetch("http://localhost:8080/home/")
            .then(res=>res.json())
            .then((result)=>{
                setFilms(result);
            })
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        Films.filter((film) => {
            return film.name.match(searchInput);
        });
    }

    return(
        <div>
            <input
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
                list={"filmlist"}
            />

            <datalist id={"filmlist"}>
                {Films.map((film)=>(
                    <option>{film.name} </option>
                ))}
            </datalist>

            <Link to=>

            </Link>
        </div>
    );
}
export default SearchBar;





