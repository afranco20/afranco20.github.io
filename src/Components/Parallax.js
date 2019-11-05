import Particles from 'particlesjs';
import React from 'react'

class Background extends React.Component {
  componentDidMount() {
    this.particles = Particles.init({
      selector: '.background',
      speed: .50,
      connectParticles: true,
      color: '#FFFFFF',
      // color: ["#7832ff", "#3296fa"],
      maxParticles: 200,
      responsive: [{
        breakpoint: 1280,
        options: {
          connectParticles: false,
        }
      }]
    });
  }

  componentWillUnmount() {
    this.state.particles.destroy();
  }

  render() {
    const arg1 = "circle farthest-corner at 10% 20%"
    const arg2 = "rgba(120,50,255,1) 0%"
    const arg3 = "rgba(50,150,250,1) 91%"

    // const arg1 = "circle farthest-corner at 10% 20%"
    // const arg2 = "#212121 0%"
    // const arg3 = "#333333 91%"

    const bg = {
      background: `radial-gradient(${arg1}, ${arg2}, ${arg3})`,
      position: 'fixed',
      // display: 'block',
      height: '100vh',
      width: '100vw',
      zIndex: '-1',
    };

    return(
      <canvas style={bg} className='background'></canvas>
    );
  }
}

export default Background;
