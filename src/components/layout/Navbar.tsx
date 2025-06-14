import { Box, Container, Flex, HStack, IconButton, useColorMode, useColorModeValue, Button, Link, useDisclosure, Stack, Image } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const links = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
];

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="header" w="full" position="fixed" top={0} zIndex={1000} bg={bgColor} borderBottom="1px" borderColor={borderColor}>
      <Container maxW="7xl" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HStack spacing={2} align="center" cursor="pointer">
                <Image src="/logo.png" alt="LumenAI Logo" boxSize="50px" />
                <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" color="brand.600">
                  LumenAI
                </Link>
              </HStack>
            </motion.div>
          </Flex>

          <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <HStack as="nav" spacing={6}>
              {links.map((link) => (
                <motion.div key={link.name} whileHover={{ y: -2 }}>
                  <Link
                    href={link.href}
                    px={2}
                    py={1}
                    rounded="md"
                    _hover={{ textDecoration: 'none', color: 'brand.500' }}
                    fontWeight="medium"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </HStack>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button as="a" href="#join" colorScheme="brand" size="lg">
                Boost sales
              </Button>
            </motion.div>
            <IconButton
              size="md"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              variant="ghost"
            />
          </HStack>

          <Box display={{ base: 'flex', md: 'none' }}>
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open menu"
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
            />
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  px={2}
                  py={1}
                  rounded="md"
                  _hover={{ textDecoration: 'none', bg: 'gray.100' }}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
              <Button as="a" href="#join" colorScheme="brand" size="lg" w="full" mt={4}>
                Boost sales
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
};
