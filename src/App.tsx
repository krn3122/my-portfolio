import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import About from 'components/About';
import Education from 'components/Education';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Grid from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
