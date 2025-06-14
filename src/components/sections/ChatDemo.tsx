import { Box, HStack, Text, VStack, useColorModeValue, Input, IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

const chatScript = [
  { sender: 'user', text: 'Hi, can you recommend a hair product for dry scalp?' },
  { sender: 'bot', text: 'Absolutely! Our Herbal Hydrate Shampoo is perfect for dry scalp. Shall I add it to your cart?' },
  { sender: 'user', text: 'Yes, please add it.' },
  { sender: 'bot', text: 'Done! Herbal Hydrate Shampoo has been added to your cart. Would you like to checkout now?' },
  { sender: 'user', text: 'Pay now.' },
  { sender: 'bot', text: 'Payment successful! 🎉 Your order #12345 will be delivered in 2 days.' },
  { sender: 'user', text: 'Great, what\'s the current status?' },
  { sender: 'bot', text: 'Your order is out for delivery. You can track it anytime here.' },
];

export const ChatDemo = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Hi 👋 How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);

  const bgUser = useColorModeValue('brand.100', 'brand.400');
  const bgBot = useColorModeValue('gray.200', 'gray.700');
  const textColorUser = useColorModeValue('brand.700', 'white');
  const textColorBot = useColorModeValue('gray.800', 'gray.100');

  const scrollToBottom = () => {
    const container = document.getElementById('chat-scroll');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  const botReply = (userMsg: string): string => {
    const msg = userMsg.toLowerCase();
    if (msg.includes('hair') || msg.includes('recommend')) {
      return 'Our Herbal Hydrate Shampoo works wonders for dry scalp. Shall I add it to your cart?';
    }
    if (msg.includes('add')) {
      return 'Added! Ready to checkout when you are.';
    }
    if (msg.includes('pay') || msg.includes('checkout')) {
      return 'Payment successful! 🎉 Your order #12345 will arrive in 2 days. Anything else?';
    }
    if (msg.includes('status') || msg.includes('order')) {
      return 'Your order is out for delivery and should reach you by tomorrow.';
    }
    return "I'm here to help with recommendations, cart, and order info!";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply(userText) }]);
      scrollToBottom();
    }, 600);
  };

  const handleNext = () => {
    setStep((prev) => (prev < chatScript.length ? prev + 1 : prev));
  };

  return (
    <Box w="full" maxW="xs" mx="auto" bg={useColorModeValue('white', 'gray.800')} p={4} rounded="lg" shadow="lg" display="flex" flexDir="column" h="320px">
      <VStack id="chat-scroll" spacing={3} align="stretch" flex="1" overflowY="auto" pb={2}>
        {messages.map((msg, idx) => (
          <HStack key={idx} justify={msg.sender === 'user' ? 'flex-end' : 'flex-start'}>
            <MotionBox
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              px={3}
              py={2}
              bg={msg.sender === 'user' ? bgUser : bgBot}
              color={msg.sender === 'user' ? textColorUser : textColorBot}
              rounded="lg"
              maxW="80%"
            >
              <Text fontSize="sm">{msg.text}</Text>
            </MotionBox>
          </HStack>
        ))}
      </VStack>
      <HStack pt={2}> 
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          size="sm"
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
        />
        <IconButton aria-label="Send" size="sm" colorScheme="brand" icon={<ArrowRightIcon />} onClick={handleSend} />
      </HStack>
        
      
    </Box>
  );
};
