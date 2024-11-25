import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7d83f3',
    },
    secondary: {
      main: '#e9eaff',
    }
  },
  typography: {
    fontSize: 12
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '0.75rem'
        },
      },
    },
  },
});

export default theme;