import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
      </header>
    </div>
  );
}

export default App;
