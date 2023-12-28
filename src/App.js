import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Card from './Component/Card/Card';
import { Outlet } from 'react-router-dom';
import { fetchFilters, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';
import { StyledEngineProvider } from '@mui/material';
function App() {
  const [searchData , setSearchData] = useState();
  const [data , setData] = useState({})

  const generateData = (key,source) =>{
    source().then((data) =>{
      setData((prevData) =>{
        return {...prevData,[key]: data}
      })
    })
  }
  useEffect(() =>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs)
    // generateData("",fetchFilters)
  } ,[])

  const {topAlbums = [] , newAlbums=[] , songs =[]} = data
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums , ...newAlbums]}/>
      <Outlet context={{data: {topAlbums , newAlbums, songs}}}/>
    </StyledEngineProvider>
    </>
  );
  }

export default App;
