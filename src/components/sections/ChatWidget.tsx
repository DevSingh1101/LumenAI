import {
  Box,
  VStack,
  HStack,
  Text,
  Spinner,
  UnorderedList,
  ListItem,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { RiSendPlane2Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";

const MotionBox = motion(Box);

export type Message = {
  sender: "user" | "bot";
  text?: string;
  loading?: boolean;
  qr?: string;
  products?: string[];
};

export const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello welcome to LumenAI, your personal AI sales assistant",
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const bgUser = useColorModeValue("#DCF8C6", "#005C4B");
  const bgBot = useColorModeValue("#FFFFFF", "#202C33");
  const colorUser = useColorModeValue("#000000", "#EDEDED");
  const colorBot = useColorModeValue("#000000", "#EDEDED");

  useEffect(() => {
    const div = scrollRef.current;
    if (div) div.scrollTop = div.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((res) => timeouts.push(setTimeout(res, ms)));

    const typeAndSend = async (text: string, speed = 40) => {
      for (let i = 1; i <= text.length; i++) {
        setInput(text.slice(0, i));
        await sleep(speed);
      }
      await sleep(300);
      setMessages((prev) => [...prev, { sender: "user", text }]);
      setInput("");
      await sleep(500);
    };

    type ConversationStep = {
      sender: "user" | "bot";
      text?: string;
      qr?: string;
      useLoader?: boolean;
      botDelay?: number;
      typingSpeed?: number;
      products?: string[];
    };

    const BOT_RESPONSE_DELAY = 2 * 1000;

    const conversation: ConversationStep[] = [
      {
        sender: "user",
        text: "I was looking for a gaming headphone under 2000 rupees",
      },
      {
        sender: "bot",
        text: "Here are my top picks:",
        useLoader: true,
        products: [
          "boAt Rockerz 450 Pro – ₹1,699 (57% off) in Hazel Beige, Luscious Black",
          "Bassheads 900 Pro – ₹1,499 (70% off) in Black",
          "Rockers 480 – ₹1,799 (50% off) in Black, White",
        ],
      },
      {
        sender: "bot",
        text: "If you want detailed view of any product, just ask me",
      },
      { sender: "user", text: "I will take bassheads 900 pro in black" },
      {
        sender: "bot",
        text: "Great choice! It is top of the line Bassheads 900 Pro added to your cart 🛒",
        useLoader: true,
      },
      {
        sender: "bot",
        text: "People who bough Bassheads 900 Pro also bought:",
        useLoader: true,
        products: [
          "Headphone Stand – ₹999",
          "Replacement Ear Cushions – ₹599",
          "Inline Volume Control – ₹399",
        ],
      },
      { sender: "user", text: "I will take inline volume control" },
      {
        sender: "bot",
        text: "Inline Volume Control added. \n Anything else or ready to checkout?",
        useLoader: true,
      },
      { sender: "user", text: "I have what I wanted, checkout please" },
      {
        sender: "bot",
        text: "You're cart has two items, your cart total is ₹2,998. They are:",
        products: [
          "Bassheads 900 Pro - ₹1,499",
          "Inline Volume Control - ₹399",
        ],
      },
      {
        sender: "bot",
        text: "Confirm your payment method",
        products: [
          "UPI",
          "Debit Card",
          "NetBanking",
          "Buy Now Pay Later",
          "Credit Card",
        ],
        useLoader: true,
      },
      { sender: "user", text: "I will pay using UPI" },
      { sender: "bot", text: "Got it, generating QR Code", useLoader: true },
      {
        sender: "bot",
        text: "Scan to pay:",
        qr: "upi://pay?pa=boat@upi&pn=BoatStore&am=9998",
        useLoader: true,
      },
      {
        sender: "bot",
        text: "Payment succesful! Fetching order details",
        useLoader: true,
      },
      {
        sender: "bot",
        text: `Your order #B102121ad is confirmed and will be shipped soon. Track your order at https://boat-lifestyle.com/order-tracking?orderId=B102121ad`,
        useLoader: true,
      },
    ];

    const playConversation = async () => {
      await sleep(800);
      for (const step of conversation) {
        if (step.sender === "user" && step.text) {
          await typeAndSend(step.text, step.typingSpeed ?? 40);
        } else if (step.sender === "bot") {
          if (!step.useLoader) {
            setMessages((prev) => [
              ...prev,
              {
                sender: "bot",
                text: step.text,
                qr: step.qr,
                products: step.products,
              } as Message,
            ]);
            continue;
          }

          let idx = -1;
          setMessages((prev) => {
            idx = prev.length;
            return [...prev, { sender: "bot", loading: true } as Message];
          });

          await sleep(step.botDelay ?? BOT_RESPONSE_DELAY);

          setMessages((prev) =>
            prev.map((m, i) =>
              i === idx
                ? ({
                    sender: "bot",
                    text: step.text,
                    qr: step.qr,
                    products: step.products,
                  } as Message)
                : m
            )
          );
        }

        await sleep(500);
      }

      timeouts.push(
        setTimeout(() => {
          setMessages([
            {
              sender: "bot",
              text: "Hello welcome to LumenAI, your personal shopper?",
            },
          ]);
          setInput("");
          playConversation();
        }, 30000)
      );
    };

    playConversation();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <Box
      w="full"
      h="full"
      p={4}
      bg={useColorModeValue("#ECE5DD", "#0B141A")}
      rounded="lg"
      shadow="lg"
      display="flex"
      flexDir="column"
    >
      <VStack
        ref={scrollRef}
        flex={1}
        align="stretch"
        overflowY="auto"
        spacing={3}
        pb={2}
      >
        {messages.map((msg, idx) => (
          <HStack
            key={idx}
            justify={msg.sender === "user" ? "flex-end" : "flex-start"}
          >
            <MotionBox
              px={3}
              py={2}
              bg={msg.sender === "user" ? bgUser : bgBot}
              color={msg.sender === "user" ? colorUser : colorBot}
              rounded="lg"
              maxW="80%"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {msg.loading ? (
                <Spinner size="sm" />
              ) : msg.qr ? (
                <VStack spacing={2}>
                  <QRCode value={msg.qr} size={120} />
                  <Text fontSize="xs">Scan to pay</Text>
                </VStack>
              ) : (
                <VStack align="start" spacing={1}>
                  {msg.text && (
                    <Text fontSize="sm" whiteSpace="pre-line">
                      {msg.text}
                    </Text>
                  )}
                  {msg.products && (
                    <UnorderedList pl={4} styleType="disc">
                      {msg.products.map((p, i) => (
                        <ListItem key={i} fontSize="sm">
                          {p}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  )}
                </VStack>
              )}
            </MotionBox>
          </HStack>
        ))}
      </VStack>

      {/* Input bar */}
      <HStack pt={2}>
        <Input
          placeholder="Type a message..."
          size="sm"
          value={input}
          isReadOnly
          bg="white"
          color="black"
          _dark={{
            bg: "white",
            color: "black",
            _placeholder: { color: "gray.500" },
          }}
          _placeholder={{
            color: "gray.400",
          }}
        />
        <IconButton
          icon={<RiSendPlane2Line />}
          aria-label="Send"
          size="sm"
          colorScheme="whatsapp"
          isDisabled
        />
      </HStack>
    </Box>
  );
};

export default ChatWidget;
