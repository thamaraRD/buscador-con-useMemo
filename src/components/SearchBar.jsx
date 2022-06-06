import React, { useState } from 'react'

export const SearchBar = ({ items, onItemSelected }) => {
  const [ query, setQuery ] = useState(''); 
  const [ results, setResults ] = useState([]); 

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={query} />
    </div>
  )
}
