import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';
import { Formulario } from './components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario>
          <input type="text"/>
          <input type="text"/>
          <Button clicavel="sim"></Button>
        </Formulario>
      </header>
    </div>
  );
}

export default App;
