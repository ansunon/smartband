import React from 'react';
import './App.css';
import Main from './components/Main'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Background from './components/image/smartband-blood-pressure.jpg'

import Appbar from './components/Appbar';
import { CardMedia } from '@material-ui/core';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + {Background } + ")"
};

function App() {
  return (
    <div>
      <Appbar/>
      <body>
      <img src={Background}/>
      </body>
    </div>
  );
}

export default App;
