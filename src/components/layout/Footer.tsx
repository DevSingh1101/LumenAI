import { Box, Container, Flex, Grid, GridItem, Heading, Link, List, ListItem, Text, VStack, useColorModeValue, Icon } from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Integrations', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaGithub, label: 'GitHub', href: '#' },
  { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
  { icon: FaDiscord, label: 'Discord', href: '#' },
];

const MotionBox = motion(Box);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverColor = useColorModeValue('brand.600', 'brand.400');

  return (
    <Box as="footer" bg={useColorModeValue('gray.50', 'gray.900')} borderTopWidth="1px" borderColor={borderColor}>
      <Container maxW="7xl" px={4} py={12}>
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr 1fr 1fr' }} gap={12} mb={12}>
          <GridItem>
            <VStack align="flex-start" spacing={6}>
              <MotionBox
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Heading as="h3" size="lg" mb={4} color={useColorModeValue('gray.800', 'white')}>
                  LumenAI
                </Heading>
                <Text color={textColor} maxW="md">
                  India’s first human-like AI sales agent. Boost conversions, elevate customer joy, and run your store on autopilot.
                </Text>
              </MotionBox>
              
              <Flex gap={4}>
                {socialLinks.map((social, index) => (
                  <MotionBox
                    key={social.label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link
                      href={social.href}
                      isExternal
                      p={2}
                      color={textColor}
                      _hover={{ color: hoverColor }}
                      aria-label={social.label}
                    >
                      <Icon as={social.icon} boxSize={5} />
                    </Link>
                  </MotionBox>
                ))}
              </Flex>
            </VStack>
          </GridItem>
          
          {footerLinks.map((column, colIndex) => (
            <GridItem key={column.title}>
              <MotionBox
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (colIndex + 1) }}
              >
                <Heading as="h4" fontSize="md" mb={6} color={useColorModeValue('gray.800', 'white')}>
                  {column.title}
                </Heading>
                <List spacing={3}>
                  {column.links.map((link, linkIndex) => (
                    <ListItem key={link.label}>
                      <MotionBox
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <Link
                          href={link.href}
                          color={textColor}
                          fontSize="sm"
                          position="relative"
                          _before={{
                            content: '""',
                            position: 'absolute',
                            width: '0',
                            height: '1px',
                            bottom: '-2px',
                            left: 0,
                            bgColor: hoverColor,
                            transition: 'width 0.3s ease',
                          }}
                          _hover={{
                            color: hoverColor, 
                            textDecoration: 'none',
                            _before: {
                              width: '100%',
                            },
                          }}
                        >
                          {link.label}
                        </Link>
                      </MotionBox>
                    </ListItem>
                  ))}
                </List>
              </MotionBox>
            </GridItem>
          ))}
        </Grid>
        
        <Box borderTopWidth="1px" borderColor={borderColor} pt={8} mt={8}>
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
            <Text color={textColor} fontSize="sm" mb={{ base: 4, md: 0 }}>
              © {currentYear} LumenAI Technologies Pvt. Ltd. All rights reserved.
            </Text>
            <Flex gap={6}>
              <Link href="#" color={textColor} fontSize="sm" _hover={{ color: hoverColor, textDecoration: 'none' }}>
                Privacy Policy
              </Link>
              <Link href="#" color={textColor} fontSize="sm" _hover={{ color: hoverColor, textDecoration: 'none' }}>
                Terms of Service
              </Link>
              <Link href="#" color={textColor} fontSize="sm" _hover={{ color: hoverColor, textDecoration: 'none' }}>
                Cookie Policy
              </Link>
            </Flex>
          </Flex>
        </Box>
        
        <Box mt={8} textAlign="center">
          <Text fontSize="xs" color={textColor}>
            Made with 🇮🇳 in India by the LumenAI team
          </Text>
          <Text fontSize="xs" color={textColor} mt={1}>
            Designed and built for the future of e-commerce
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
