import React from 'react'
import {Box, Typography, Paper, Container} from '@material-ui/core'

class Skills extends React.Component {
  content() {
    return (
      <Paper className="Skills">
        <Typography variant="h4">
          Skills
        </Typography>

      </Paper>
    );
  }

  render() {
    return (
      <Container id="Skills" maxWidth="md" component="section">
        {this.content()}
      </Container>
    );
  }
}

export default Skills;
