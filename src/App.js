import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Projects from './components/Projec/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="purple.50" px={6}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
      </Box>
    </ChakraProvider>
  );
}

export default App;
