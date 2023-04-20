import React from 'react';
import axios from 'axios';

import { useState } from 'react';




const SearchBar = ({setimages})=>{

    const [searchTerm, setsearchTerm] = useState("");


    const handleSearch = async(e)=>{
        
        e.preventDefault();
        const response = await axios.get(`https://api.unsplash.com/search/photos`,{
            params : {
                query: searchTerm
            },
            headers:{
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            }
            
        })
        setimages(response.data.results);

    }
    return(
        <div className='searchbar'>
            <input type="text" placeholder='Search for images...' onChange={(e)=>{setsearchTerm(e.target.value)}} value={searchTerm} />
            <button onClick={handleSearch}>Search</button>
            
        </div>
    )
}

export default SearchBar;