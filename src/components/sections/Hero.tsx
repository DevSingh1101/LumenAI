import { Box, Button, Container, Flex, Heading, Text, VStack, useColorModeValue, Image, HStack, useBreakpointValue } from '@chakra-ui/react';
import ChatWidget from './ChatWidget';
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const Hero = () => {
  const headingSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const subheadingSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const heroImageSize = useBreakpointValue({ base: '300px', md: '500px' });

  return (
    <Box as="section" position="relative" overflow="hidden" minH="80vh" display="flex" alignItems="center">
      <Container maxW="7xl" mt={20} px={4}>
        <Flex direction={{ base: 'column', lg: 'row' }} align="center" justify="space-between">
          <VStack spacing={4} align={{ base: 'center', lg: 'flex-start' }} textAlign={{ base: 'center', lg: 'left' }} maxW="2xl" mx={{ base: 'auto', lg: 0 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text
                color="brand.500"
                fontWeight="bold"
                letterSpacing="wide"
                textTransform="uppercase"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                mb={2}
              >
                Boost sales, improve conversions, reduce hassle with AI that outsells humans
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Heading as="h3" size={headingSize} lineHeight="1.1" fontWeight="semibold">
                Your 24/7 AI sales teammate&nbsp;
                <Box as="span" color="brand.500">LumenAI</Box>
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text fontSize={subheadingSize} color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl" fontWeight="bold">
                Increase conversions, boost sales, and delight customers.<br />All through one smooth, chat-first interface.
              </Text>
            </motion.div>

            <HStack spacing={4} mt={8} w={{ base: 'full', sm: 'auto' }} justify={{ base: 'center', lg: 'flex-start' }}>
              <MotionButton
                as="a"
                href="#join"
                colorScheme="brand"
                size={buttonSize} px={6} py={5}
                rightIcon={<ArrowForwardIcon />}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Start Boosting Sales
              </MotionButton>
              <MotionButton
                as="a"
                href="#features"
                variant="outline"
                size={buttonSize} px={6} py={5}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Learn More
              </MotionButton>
            </HStack>
          </VStack>

          <MotionBox
            position="relative"
            height="600px"
            width="500px"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            style={{ animation: 'pulse 3s infinite ease-in-out' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <Box
                height="100%"
                width="100%"
                bg={useColorModeValue('white', 'gray.900')}
                mx="auto"
                p="2px"
                bgGradient="linear(to-r, brand.400, brand.600)"
                borderRadius="xl"
              >
                <ChatWidget />
              </Box>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};
