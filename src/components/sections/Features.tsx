import { Box, Container, Flex, Grid, GridItem, Heading, Text, VStack, useColorModeValue, Icon, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiShield, FiRefreshCcw, FiLayout, FiShoppingCart, FiBarChart2, FiUserCheck } from 'react-icons/fi';

const features = [
  {
    icon: FiShield,
    title: 'Secure, Brand-Aligned Intelligence',
    description:
      'We ingest your product catalogue, FAQs, and historic tickets inside a hardened private index, then layer tone and style controls so every reply sounds exactly like your brand.',
  },
  {
    icon: FiRefreshCcw,
    title: 'Adaptive Conversation Engine',
    description:
      'Live data keeps the bot in sync—new SKUs, policies, or promotions automatically refine answers and recommendations without a single manual upload.',
  },
  {
    icon: FiLayout,
    title: 'Visual Builder & One-Click Templates',
    description:
      'Drag-and-drop flows or deploy pre-built journeys like cart recovery and order tracking. Launch sophisticated experiences in minutes—no code required.',
  },
  {
    icon: FiShoppingCart,
    title: 'Commerce-Ready Automations',
    description:
      'Shoppers can browse, add to cart, apply coupons, and pay directly in chat. Native integrations with payment gateways, CRM, email, and SMS drive seamless revenue.',
  },
  {
    icon: FiBarChart2,
    title: 'Actionable Analytics Dashboard',
    description:
      'Track engagement, conversion uplift, CSAT, ticket deflection, and attributed revenue in real time, with easy export to your BI tools.',
  },
  {
    icon: FiUserCheck,
    title: 'Seamless Human Escalations',
    description:
      'Complex issues transfer to support agents inside your help-desk, complete with chat transcript and customer context for white-glove service.',
  },
];

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

export const Features = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorderColor = useColorModeValue('gray.100', 'gray.700');
  const iconColor = useColorModeValue('brand.500', 'brand.300');

  return (
    <Box as="section" py={10} id="features">
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
              Features
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="3xl">
              AI chat that feels human—and converts.
            </Text>
          </motion.div>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={12}>
          {features.map((feature, index) => (
            <MotionBox
              key={feature.title}
              bg={cardBg}
              p={8}
              rounded="xl"
              borderWidth="1px"
              borderColor={cardBorderColor}
              shadow="sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              cursor="pointer"
               whileHover={{ y: -5, scale: 1.03, boxShadow: 'xl' }}
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                w={12}
                h={12}
                mb={6}
                rounded="lg"
                bg={`${iconColor}10`}
                color={iconColor}
              >
                <Icon as={feature.icon} boxSize={6} />
              </Flex>
              <Heading as="h3" size="md" mb={3}>
                {feature.title}
              </Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>
                {feature.description}
              </Text>
            </MotionBox>
          ))}
        </SimpleGrid>

        
          
      </Container>
    </Box>
  );
};
