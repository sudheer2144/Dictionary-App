
import { fetchData } from "../redux/actions/actions"

import { useState } from "react"

import { useDispatch } from "react-redux";

import "../styles/SearchComponent.css"


export const SearchComponent = () => {

    const [text, setText] = useState("");

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchData(text));
    }

    return (
        <div className="search">
            <input type="text" name="" className="searchInput" placeholder="Search for a word..." onChange={(e) => { setText(e.target.value) }} />
            <button id="searchButton" onClick={handleClick}>SEARCH</button>
        </div>
    )
}