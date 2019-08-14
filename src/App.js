import React, {useState} from 'react';

import './App.css';

import data from './data.js';

import Heading from './components/heading/Heading.js';
import Form from './components/form/Form.js';
import MembersList from './components/membersList/MembersList.js'

function App() {
  const [list, setList] = useState(data);
  console.log(list);
  return (
    <div className="App">
    <Heading />
    <Form />
    <MembersList />
     
    </div>
  );
}

export default App;
