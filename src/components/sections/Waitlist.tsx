import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import CommonInput from "../common/CommonInput";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleWaitlistSubmission = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await submitWaitlistForm({
        Timestamp: (new Date()).toUTCString(),
        name,
        companyName,
        companyWebsite,
        email,
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description:
            "You've been added to our waitlist. We'll be in touch soon!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        resetForm();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const submitWaitlistForm = async (data: WaitlistFormData) => {
    const url =
      "https://script.google.com/macros/s/AKfycbzNSeewfeA2Z-Atl5pKbCDZYMELrSVtwkZ6kpNZYKZEfLsty5Z5ekOLxmBsA1F-oAUi/exec";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "no-cors",
    });

    return response;
  };

  const resetForm = () => {
    setEmail("");
    setName("");
    setCompanyName("");
    setCompanyWebsite("");
  };

  type WaitlistFormData = {
    Timestamp: string;
    name: string;
    companyName: string;
    companyWebsite: string;
    email: string;
  };

  const bgGradient = useColorModeValue(
    "linear(to-r, brand.500, brand.600)",
    "linear(to-r, brand.500, brand.700)"
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

          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            position="relative"
            zIndex={1}
          >
            <Box
              flex={1}
              color="white"
              mb={{ base: 10, lg: 0 }}
              pr={{ lg: 12 }}
            >
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
                Unlock Revenue Growth with{" "}
                <Box as="span" color="white">
                  LumenAI
                </Box>
              </Heading>

              <Text fontSize="lg" mb={8} opacity={0.9}>
                Get early access to the AI that turns browsers into buyers and
                keeps customers smiling. Limited spots available!
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

            <Box flex={{ base: "1", md: "0.8", lg: "0.8" }} w="full" maxW="lg">
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
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  mb={6}
                  color="gray.800"
                  textAlign="center"
                >
                  Start Boosting Sales
                </Text>

                <form onSubmit={handleWaitlistSubmission}>
                  <VStack spacing={5}>
                    <CommonInput
                      label="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Acme Inc."
                    />
                    <CommonInput
                      label="Company Website"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      placeholder="https://acme.com"
                    />
                    <CommonInput
                      label="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                    />

                    <CommonInput
                      label="Work Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      type="email"
                    />

                    <Button
                      type="submit"
                      colorScheme="brand"
                      size="lg"
                      w="full"
                      mt={4}
                      isLoading={isLoading}
                      loadingText="Boosting..."
                    >
                      Start Boosting Sales
                    </Button>

                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textAlign="center"
                      mt={2}
                    >
                      We respect your privacy. This information will never be shared with third parties.
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
