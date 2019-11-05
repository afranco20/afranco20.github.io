import React from 'react';
import {Box, Typography, Paper, Container} from '@material-ui/core/'

class About extends React.Component {
  content() {
    return(
      <Box className="About">
        <Typography style={{paddingBottom: "24px"}} variant="h2">
          I'm Alex Franco
        </Typography>
        <Typography variant="h5">
          I'm a junior software engineer. I'm currently a senior at the
          University of Central Florida where I'm studying computer science.
        </Typography>
      </Box>
    );
  }

  render() {
    return(
      <Container id="About" maxWidth="md" component="section">
        {this.content()}
      </Container>
    );
  }
}

export default About;
