import { useState } from "react";   

export default function SearchBar({ onSearch }) {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(!value.trim());
        onSearch(value.trim());
        setValue("");
    }

    return(
        <from onSubmit={handleSubmit} classNAme="search-bar">
            <input 
            type="text"
            placeholder="Search City"
            onChange={(e) => setValue(e.target.value)} />
            <button type ="submit">Search</button>
        </from>
    );
}