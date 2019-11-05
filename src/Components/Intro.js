import React from 'react';
import {Box, Container, Typography} from '@material-ui/core/';

class Intro extends React.Component {
  content() {
    return(
      <Container className="Header">
        <Typography color="textSecondary" variant="h1">
          Hello World
        </Typography>
      </Container>
    );
  }

  render() {
    return(
        <Container id="Header" component="section">
          {this.content()}
        </Container>
    );
  }
}

export default Intro;
