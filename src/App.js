import React from 'react';

import './App.css';

import data from './data.js'

import Heading from './components/heading/Heading.js'

function App() {
  console.log(data);
  return (
    <div className="App">
    <Heading />
     
    </div>
  );
}

export default App;
