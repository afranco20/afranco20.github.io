import React from "react";
import "./App.css";

// custom components
import About from "./Components/About";
import Intro from "./Components/Intro";
import Parallax from "./Components/Parallax";
import Skills from "./Components/Skills";

// material ui
import { Box } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Parallax />
      <Intro />

      <Box style={{ background: "#e1e2e1" }}>
        <About />
        <Skills />
      </Box>
    </div>
  );
}

export default App;
