import React from "react";

// material ui
import { Typography, Paper, Container } from "@material-ui/core";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faPython,
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faReact,
  faGitAlt,
  faGithub,
  faLinux
} from "@fortawesome/free-brands-svg-icons";

class Skills extends React.Component {
  group(title, items) {
    return (
      <React.Fragment>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>

        <Typography variant="h2" component="h2">
          {items}
        </Typography>
      </React.Fragment>
    );
  }

  content() {
    const languages = [faJava, faPython, faHtml5, faCss3Alt, faJs];
    const listItems1 = languages.map(x => (
      <FontAwesomeIcon style={{ margin: "10px" }} key={x.iconName} icon={x} />
    ));

    const tools = [faLinux, faBootstrap, faReact, faGitAlt, faGithub];
    const listItems2 = tools.map(x => (
      <FontAwesomeIcon style={{ margin: "10px" }} key={x.iconName} icon={x} />
    ));

    return (
      <Paper className="Skills">
        {this.group("Programming languages", listItems1)}
        {this.group("Tools", listItems2)}
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
