import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Projects from './components/Projec/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="purple.50">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
