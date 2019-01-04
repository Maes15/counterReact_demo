import React, { Component } from 'react';
//import Numero from './Numero.jsx';
import Link from './Link';
import Counter from './Contador';
//import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App-header">

          <Counter max="16" amount="5"/>
          <Counter from="12" max='30'/>
          <Counter from='hola'/>
          <Counter from="33" amount="-3" min="12"/>
      </div>


    );
  }
}

export default App;


//<Numero num='32' />
//<Numero num='100000' />
//<Numero num='9' />
//< Link lk="google"/>