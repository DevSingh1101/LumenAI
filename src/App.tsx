import { Box, ChakraProvider, ColorModeScript, CSSReset, Divider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Testimonials } from './components/sections/Testimonials';
import { Waitlist } from './components/sections/Waitlist';
import { Footer } from './components/layout/Footer';
import { theme } from './config/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <Router>
        <Box minH="100vh" display="flex" flexDirection="column">
          <Navbar />
          <Box as="main" flex={1}>
            <Hero />
            <Divider mt={8} borderWidth="2px" />
            <Features />
            <Divider mt={8} borderWidth="2px" />
            <Testimonials />
            <Waitlist />
          </Box>
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
