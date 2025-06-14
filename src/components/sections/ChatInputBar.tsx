import { FC } from 'react';
import { HStack, Input, IconButton } from '@chakra-ui/react';
import { RiSendPlane2Line } from 'react-icons/ri';

interface Props {
  value: string;
}

const ChatInputBar: FC<Props> = ({ value }) => (
  <HStack pt={2}>
    <Input
      placeholder="Type a message..."
      size="sm"
      value={value}
      isReadOnly
      bg="white"
      color="black"
      _dark={{ bg: 'white', color: 'black', _placeholder: { color: 'gray.500' } }}
      _placeholder={{ color: 'gray.400' }}
    />
    <IconButton
      icon={<RiSendPlane2Line />}
      aria-label="Send"
      size="sm"
      colorScheme="whatsapp"
      isDisabled
    />
  </HStack>
);

export default ChatInputBar;
