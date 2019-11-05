import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#007bff',
      light: '#69a9ff',
      dark: '#0050cb',
      contrastText: '#ffffff'
    },
    text: {
      primary: "#616161",
      secondary: "#FFFFFF",
    }
  }
});

export default theme;
