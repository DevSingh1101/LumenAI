import { Box, Button, Container, Flex, Heading, Text, VStack, useColorModeValue, Image, HStack, useBreakpointValue } from '@chakra-ui/react';
import ChatWidget from './ChatWidget';
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export const Hero = () => {
  const subheadingSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const buttonSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  return (
    <Box as="section" position="relative" overflow="hidden" minH="80vh" display="flex" alignItems="center">
      <Container maxW="7xl" mt={20} px={4}>
        <Flex direction={{ base: 'column', lg: 'row' }} align="center" gap={20} justify="space-between">
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
                fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}
                textAlign={{ base: 'center', lg: 'left' }}
                whiteSpace="pre-wrap"
                mb={2}
              >
                Turning conversations into conversions, 24/7.
              </Text>
            </motion.div>


            <Flex direction="column" gap={2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Heading as="h3" size={subheadingSize} lineHeight="1.1" fontWeight="semibold">
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
            </Flex>

            <Flex direction={{ base: 'column', lg: 'row' }} gap={4} mt={4} justify={{ base: 'center', lg: 'flex-start' }}>
              <MotionButton
                as="a"
                href="#join"
                colorScheme="brand"
                size={buttonSize} px={6} py={3}
                rightIcon={<ArrowForwardIcon />}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Boost Sales
              </MotionButton>
              <MotionButton
                as="a"
                href="#features"
                variant="outline"
                size={buttonSize} px={6} py={3}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Learn More
              </MotionButton>
            </Flex>
          </VStack>

          <MotionBox
            position="relative"
            height="80vh"
            width="600px"
            maxWidth="90vw"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            style={{ animation: 'pulse 3s infinite ease-in-out' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box
                height="100%"
                width="100%"
                bg={useColorModeValue('white', 'gray.900')}
                mx="auto"
                p="2px"
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
