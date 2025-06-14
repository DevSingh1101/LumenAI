import { Box, Container, Flex, Heading, Text, VStack, useColorModeValue, Avatar, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Founder, CraftKart (India)',
    content:
      '“Our team fell in love with the clean UI in minutes. LumenAI trained on our 8-year catalogue overnight and the bot now feels like a top salesperson—our revenue jumped 2.4× within the first month.”',
  },
  {
    name: 'Priya Patel',
    role: 'SalesAgent User',
    content:
      '“Buying is literally a chat away. The interface is so simple that I can add items, apply coupons, and pay without leaving the conversation.”',
  },
  {
    name: 'Rahul Verma',
    role: 'Co-Founder, TrendHive',
    content:
      '“Managing product queries, payments, and tickets used to be chaos. With LumenAI, every interaction lands in one dashboard, fully secure and plugged into our CRM and analytics stack.”',
  },
];

const MotionBox = motion(Box);

export const Testimonials = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('lg', 'dark-lg');

  return (
    <Box as="section" py={20} bg={useColorModeValue('gray.50', 'gray.900')} id="testimonials">
      <Container maxW="7xl" px={4}>
        <VStack spacing={3} textAlign="center" mb={16}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -2, scale: 1.05 }}
          >
            <Text color="brand.600" fontWeight="semibold" letterSpacing="wide" textTransform="uppercase" fontSize="sm" px={4} py={2} bg={useColorModeValue('brand.100', 'gray.600')} rounded="full">
              Testimonials
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MotionBox whileHover={{ y: -2, scale: 1.03 }} display="inline-block">
              <Heading as="h2" size="3xl" px={6} py={2} lineHeight="1.2" fontWeight="extrabold" rounded="full">
                What People Are Saying
              </Heading>
            </MotionBox>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="3xl">
              Don't just take our word for it. Here's what our users have to say about their experience with LumenAI.
            </Text>
          </motion.div>
        </VStack>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={8}
          justify="center"
          align="stretch"
          mt={12}
        >
          {testimonials.map((testimonial, index) => (
            <MotionBox
              key={testimonial.name}
              flex="1"
              minW={{ base: '100%', lg: '30%' }}
              bg={cardBg}
              p={8}
              rounded="2xl"
              boxShadow={cardShadow}
              position="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
                            <VStack spacing={6} align="flex-start" h="full">
                <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} position="relative" zIndex={1}>
                  {testimonial.content}
                </Text>
                <Flex align="center" mt="auto" pt={4} w="full">
                  <Box>
                    <Text fontWeight="bold" fontSize="lg">
                      {testimonial.name}
                    </Text>
                    <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize="sm">
                      {testimonial.role}
                    </Text>
                  </Box>
                </Flex>
              </VStack>
            </MotionBox>
          ))}
        </Flex>

        {/* Brand Logos */}
        <MotionBox
          mt={20}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Text textAlign="center" color={useColorModeValue('gray.500', 'gray.400')} mb={8}>
            TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
          </Text>
          <Flex
            justify="space-around"
            align="center"
            flexWrap="wrap"
            gap={8}
            opacity={0.7}
            _hover={{ opacity: 1 }}
            transition="opacity 0.3s ease"
          >
            {['TechCrunch', 'Forbes', 'Wired', 'The Verge', 'Mashable'].map((brand) => (
              <Text
                key={brand}
                fontSize="xl"
                fontWeight="bold"
                color={useColorModeValue('gray.600', 'gray.300')}
                _hover={{ color: 'brand.500' }}
                transition="color 0.3s ease"
              >
                {brand}
              </Text>
            ))}
          </Flex>
        </MotionBox>
      </Container>
    </Box>
  );
};
