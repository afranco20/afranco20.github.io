import React from 'react';
import {Box, Typography} from '@material-ui/core/'

class About extends React.Component {
  content() {
    return(
      <div className="Content">
        <Typography variant="h4">
          Test
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic itaque
          dicta pariatur consequuntur. Consectetur accusamus optio a quos odit
          minus dolorum officia commodi! Quidem necessitatibus accusantium
          dignissimos est, aliquid dolor.
        </Typography>
      </div>
    );
  }

  render() {
    return(
      <Box id="About" component="section">
        {this.content()}
      </Box>
    );
  }
}

export default About;
