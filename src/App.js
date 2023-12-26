import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [searchData , setSearchData] = useState()
  return (
    <div className="App">
      <Navbar searchData={searchData}/>
    </div>
  );
  }

export default App;
