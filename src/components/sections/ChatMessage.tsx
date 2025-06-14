import { FC } from 'react';
import { HStack, VStack, Text, Spinner, UnorderedList, ListItem, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';

// Local message type (kept identical to ChatWidget's)
export type ChatMessageType = {
  sender: 'user' | 'bot';
  text?: string;
  loading?: boolean;
  qr?: string;
  products?: string[];
};

const MotionBox = motion(Box);

interface Props {
  message: ChatMessageType;
  bgUser: string;
  bgBot: string;
  colorUser: string;
  colorBot: string;
}

const ChatMessage: FC<Props> = ({ message, bgUser, bgBot, colorUser, colorBot }) => {
  const isUser = message.sender === 'user';

  return (
    <HStack justify={isUser ? 'flex-end' : 'flex-start'}>
      <MotionBox
        bg={isUser ? bgUser : bgBot}
        color={isUser ? colorUser : colorBot}
        rounded="lg"
        px={3}
        py={2}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {message.loading ? (
          <Spinner size="sm" />
        ) : message.qr ? (
          <VStack spacing={2}>
            <QRCode value={message.qr} size={120} />
            <Text fontSize="xs">Scan to pay</Text>
          </VStack>
        ) : (
          <VStack align="start" spacing={1}>
            {message.text && <Text fontSize="sm" whiteSpace="pre-line">{message.text}</Text>}
            {message.products && (
              <UnorderedList pl={4} styleType="disc">
                {message.products.map((p, i) => (
                  <ListItem key={i} fontSize="sm">{p}</ListItem>
                ))}
              </UnorderedList>
            )}
          </VStack>
        )}
      </MotionBox>
    </HStack>
  );
};

export default ChatMessage;
