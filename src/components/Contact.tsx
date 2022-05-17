import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";

const Contact: React.FC = () => {
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
          <Container
            bgColor="pink.100"
            borderRadius="5"
            h="50"
            w="200px"
            centerContent
          >
            <Text fontSize="2xl">Email Me</Text>
            <Text fontSize="md ">Connect email api</Text>
          </Container>
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
