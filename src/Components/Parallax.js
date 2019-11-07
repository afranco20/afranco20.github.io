import Particles from "particlesjs";
import React from "react";

class Background extends React.Component {
  componentDidMount() {
    this.particles = Particles.init({
      selector: "#background",
      speed: 0.5,
      connectParticles: true,
      color: "#FFFFFF",
      maxParticles: 200,
      responsive: [
        {
          breakpoint: 1280,
          options: {
            connectParticles: false
          }
        }
      ]
    });
  }

  componentWillUnmount() {
    this.state.particles.destroy();
  }

  render() {
    const a = "circle farthest-corner at 10% 20%";
    const b = "rgba(120,50,255,1) 0%";
    const c = "rgba(50,150,250,1) 91%";

    const bg = {
      background: `radial-gradient(${a}, ${b}, ${c})`,
      position: "fixed",
      height: "100vh",
      width: "100vw",
      zIndex: "-1"
    };

    return (
      <div style={bg}>
        <canvas id="background"></canvas>
      </div>
    );
  }
}

export default Background;
