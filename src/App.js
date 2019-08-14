import React, {useState} from 'react';

import './App.css';

import data from './data.js'

import Heading from './components/heading/Heading.js'
import Form from './components/form/Form.js'

function App() {
  const [list, setList] = useState(data);
  console.log(list);
  return (
    <div className="App">
    <Heading />
    <Form />
     
    </div>
  );
}

export default App;
