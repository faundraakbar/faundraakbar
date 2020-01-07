import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mencoba from './Mencoba.js';
import { Button } from 'reactstrap';

const App = () =>{
  return(
    <div>
      <p>Testing</p>
      <Mencoba />
      <Button color="danger">Danger</Button>
    </div>
  )
}



export default App;
