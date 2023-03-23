'use client';

import {ThemeProvider, createTheme} from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#f4a249',
      main: '#f4a249',
      dark: '#f4a249',
      contrastText: '#fff',
    },
  },
});

export default function MaterialProvider({children}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
