import React from 'react';
import {Box, Container, Typography} from '@material-ui/core/';
import Particles from "particlesjs";

class Navbar extends React.Component {
  content() {
    return(
      <Container className="Header">
        <Typography color="textPrimary" variant="h1">
            Hello World
        </Typography>
      </Container>
    );
  }

  render() {
    return(
      <Box id="Header" component="section">
        {this.content()}
        <canvas className="background"></canvas>
      </Box>
    );
  }
}

window.onload = () => {
  Particles.init({
    selector: '.background',
    speed: .50,
    connectParticles: true,
    color: "#FFFFFF",
    // color: ["#7832ff", "#3296fa"],
    maxParticles: 200,
    responsive: [
      {
        breakpoint: 1280,
        options: {
          connectParticles: false,
        }
      }
    ]
  });
};

export default Navbar;
