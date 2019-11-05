import React from 'react';
import './App.css';

// custom components
import About from './Components/About';
import Intro from './Components/Intro';
import Parallax from './Components/Parallax';
import Skills from './Components/Skills';

// material ui
import { Divider, Box } from '@material-ui/core';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJava } from '@fortawesome/free-brands-svg-icons'

function App() {
  library.add(faJava);

  return (
    <div className="App">
      <Parallax />
      <Intro />

      <Box style={{background: '#e1e2e1'}}>
        <About />
        <Skills/>
      </Box>
    </div>
  );
}

export default App;
