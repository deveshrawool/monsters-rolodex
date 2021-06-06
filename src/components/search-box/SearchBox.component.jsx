import React from 'react'
import './SearchBox_Styles.css'

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input type="search" 
          placeholder={placeholder} 
          className="search"
          onChange ={handleChange}>
        </input>
    )
}
