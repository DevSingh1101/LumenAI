import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack, useColorModeValue, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

export const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {

      const url = "https://script.google.com/macros/s/AKfycbzNSeewfeA2Z-Atl5pKbCDZYMELrSVtwkZ6kpNZYKZEfLsty5Z5ekOLxmBsA1F-oAUi/exec"
      const data = {
        "Timestamp": (new Date()).toUTCString(),
        "name": name,
        "companyName": companyName,
        "companyWebsite": companyUrl,
        "email": email
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors'
      })

      if (response) {
        toast({
          title: 'Success!',
          description: 'You\'ve been added to our waitlist. We\'ll be in touch soon!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        setEmail('');
        setName('');
        setCompanyName('');
        setCompanyUrl('');
      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const bgGradient = useColorModeValue(
    'linear(to-r, brand.500, brand.600)',
    'linear(to-r, brand.500, brand.700)'
  );

  return (
    <Box as="section" py={20} id="join">
      <Container maxW="7xl" px={4}>
        <MotionBox
          bgGradient={bgGradient}
          rounded="3xl"
          p={{ base: 6, md: 12 }}
          position="relative"
          overflow="hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <Box
            position="absolute"
            top={-20}
            right={-20}
            w="400px"
            h="400px"
            bg="white"
            opacity={0.1}
            rounded="full"
          />
          <Box
            position="absolute"
            bottom={-40}
            left={-40}
            w="500px"
            h="500px"
            bg="white"
            opacity={0.05}
            rounded="full"
          />

          <Flex direction={{ base: 'column', lg: 'row' }} align="center" position="relative" zIndex={1}>
            <Box flex={1} color="white" mb={{ base: 10, lg: 0 }} pr={{ lg: 12 }}>
              <Text
                as="span"
                display="inline-block"
                px={3}
                py={1}
                mb={4}
                bg="whiteAlpha.200"
                rounded="full"
                fontSize="sm"
                fontWeight="semibold"
                letterSpacing="wide"
              >
                Start Boosting Sales
              </Text>

              <Heading as="h2" size="2xl" mb={6} lineHeight="1.2">
                Unlock Revenue Growth with <Box as="span" color="white">LumenAI</Box>
              </Heading>

              <Text fontSize="lg" mb={8} opacity={0.9}>
                Get early access to the AI that turns browsers into buyers and keeps customers smiling.
                Limited spots available!
              </Text>

              <Box>
                <Flex align="center" mb={4}>
                  <Box w={2} h={2} bg="white" rounded="full" mr={3} />
                  <Text>Early access to the platform</Text>
                </Flex>
                <Flex align="center" mb={4}>
                  <Box w={2} h={2} bg="white" rounded="full" mr={3} />
                  <Text>Exclusive beta tester perks</Text>
                </Flex>
                <Flex align="center">
                  <Box w={2} h={2} bg="white" rounded="full" mr={3} />
                  <Text>Special launch discounts</Text>
                </Flex>
              </Box>
            </Box>

            <Box flex={{ base: '1', md: '0.8', lg: '0.8' }} w="full" maxW="lg">
              <MotionBox
                bg="white"
                p={8}
                rounded="2xl"
                shadow="2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Text fontSize="xl" fontWeight="bold" mb={6} color="gray.800" textAlign="center">
                  Start Boosting Sales
                </Text>

                <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel color="gray.700">Company Name</FormLabel>
                      <Input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Acme Inc."
                        bg="gray.50"
                        borderColor="gray.200"
                        _hover={{ borderColor: 'brand.300' }}
                        _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                        size="lg"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="gray.700">Company Website</FormLabel>
                      <Input
                        type="text"
                        value={companyUrl}
                        onChange={(e) => setCompanyUrl(e.target.value)}
                        placeholder="https://acme.com"
                        bg="gray.50"
                        borderColor="gray.200"
                        _hover={{ borderColor: 'brand.300' }}
                        _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                        size="lg"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="gray.700">Full Name</FormLabel>
                      <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        bg="gray.50"
                        borderColor="gray.200"
                        _hover={{ borderColor: 'brand.300' }}
                        _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                        size="lg"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="gray.700">Work Email</FormLabel>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        bg="gray.50"
                        borderColor="gray.200"
                        _hover={{ borderColor: 'brand.300' }}
                        _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                        size="lg"
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      colorScheme="brand"
                      size="lg"
                      w="full"
                      mt={4}
                      isLoading={isLoading}
                      loadingText="Joining..."
                    >
                      Start Boosting Sales
                    </Button>

                    <Text fontSize="sm" color="gray.500" textAlign="center" mt={2}>
                      We respect your privacy. Unsubscribe at any time.
                    </Text>
                  </VStack>
                </form>
              </MotionBox>
            </Box>
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
};
