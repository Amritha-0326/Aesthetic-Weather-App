import { useState } from "react";   

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!value.trim()) return; // ✅ proper guard

    onSearch(value.trim());
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input 
        type="text"
        placeholder="Search City"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
