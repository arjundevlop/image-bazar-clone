
import './App.css';
import SearchBar from './Components/SearchBar';
import React from 'react'
import { useState } from 'react';
import ImagesContainer from './Components/Imagescontainer';
import Heading from './Components/Heading';

function App() {
  const [images, setimages] = useState([]);
  console.log(images);
  return (
    <div className="App">
    <Heading/>

    <SearchBar setimages={setimages}/>
    <ImagesContainer images={images}/>

      
    </div>
  );
}

export default App;
