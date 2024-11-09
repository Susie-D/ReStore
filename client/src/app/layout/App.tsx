import { Container, createTheme, CssBaseline, FormControlLabel, Switch, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

function handleThemeChange()  {
  setDarkMode(!darkMode);
}

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? 'eaeaea' : 'black'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <div>
          <Header />
          <FormControlLabel 
          sx={{ p: 3, mr: 2 }} 
          control={<Switch checked={darkMode} onChange={handleThemeChange}/>} 
          label={darkMode ? 
          'Dark Mode' : 'Light Mode'} />
          <Container>
            <Outlet/>
          </Container>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;

