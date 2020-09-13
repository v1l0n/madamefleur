import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF', // '#556cd6',
    },
    secondary: {
      main: '#695A4A',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#B49B83',
    },
  },
});

export default theme;