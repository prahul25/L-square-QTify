import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
function App() {
  const [searchData , setSearchData] = useState();
  return (
    <div className="App">
      <Navbar searchData={searchData}/>
      <Hero/>
    </div>
  );
  }

export default App;
