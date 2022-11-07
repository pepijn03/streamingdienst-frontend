import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("")

    const[Films,setFilms]=useState([])

    function getquery(){
        return searchInput;
    }


    useEffect(()=>{
        console.log(Films)
        fetch("http://localhost:8080/home/")
            .then(res=>res.json())
            .then((result)=>{
                setFilms(result);
            })
    },[Films])

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
                    <option key={film}>{film.name} </option>
                ))}
            </datalist>

            <button>
                <Link to={`search/${getquery()}`}>
                    submit
                </Link>
            </button>
        </div>


    );
}
export default SearchBar;





