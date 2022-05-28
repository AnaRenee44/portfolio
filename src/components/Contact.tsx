import React from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

interface Message {
  message: {
    subject: string;
    body: {
      contentType: string;
      content: string;
    };
    toRecipients: [
      {
        emailAddress: {
          address: string;
        };
      }
    ];
  };
}

const Contact: React.FC = () => {
  const sampleMessage: Message = {
    message: {
      subject: "Portfolio Inquiry",
      body: {
        contentType: "Text",
        content: "Hey there!",
      },
      toRecipients: [
        {
          emailAddress: {
            address: "email@gmail.com",
          },
        },
      ],
    },
  };

  const sendEmail = () => {
    axios
      .post<Message>("/api/outlook/sendMail", {
        message: "the message",
        test: "test and message are part of the request body",
      })
      .then((response) => console.log("Email successful: ", response))
      .catch((err) => console.error("Email failed: ", err));
  };

  return (
    <Flex
      id="contact-me"
      minW="100%"
      h="625"
      backgroundColor="pink.100"
      ml="-517"
      mr="-517"
      alignItems="center"
      direction="column"
    >
      <Flex paddingTop="30px">
        <Text as="u" fontSize="4xl">
          Let&apos;s Connect
        </Text>
      </Flex>
      <Container bgColor="red.400" h="350" w="500px" mt="50px" borderRadius="5">
        <VStack spacing="30px">
          <Container mt="50px" centerContent>
            <Text fontWeight="bold" fontSize="3xl" color="white">
              Want to...
            </Text>
            <Text fontSize="xl" color="white">
              Work with me?
            </Text>
            <Text fontSize="xl" color="white">
              Ask me questions?
            </Text>
            <Text fontSize="xl" color="white">
              Just say hi?
            </Text>
          </Container>
          {/* <Container
            bgColor="pink.100"
            borderRadius="5"
            h="50"
            w="200px"
            centerContent
          > */}
          <Button onClick={sendEmail}>
            <Text fontSize="2xl">Email Me</Text>
            <Text fontSize="md ">Connect email api</Text>
          </Button>

          {/* </Container> */}
        </VStack>
      </Container>
      <Container
        bgColor="red.400"
        borderRadius="3"
        h="50"
        w="200px"
        mt="50px"
        centerContent
      >
        <Text fontSize="xl">Buy Me A Coffee?</Text>
        <Text fontSize="sm">Connect the api</Text>
      </Container>
    </Flex>
  );
};

export default Contact;
