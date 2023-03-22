'use client';

import {ThemeProvider, createTheme} from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#f4a249',
    },
  },
});

export default function MaterialProvider({children}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
