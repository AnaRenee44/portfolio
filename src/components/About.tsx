import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Flex
      minW="100%"
      h="625"
      backgroundColor="yellow.100"
      ml="-517"
      mr="-517"
      alignItems="center"
      justifyContent="space-around"
      direction="column"
    >
      <Flex>
        <Text as="u" fontSize="4xl">
          About Me
        </Text>
      </Flex>
      <HStack spacing="75">
        <VStack spacing="75px">
          <Box w="500px">
            <Text fontSize="2xl">
              This is a blurb about me and how I’m a full stakc developer with a
              main interest in frontend UI/UX development but also Cloud
              Computing, Database Management, and possibly gaming?
            </Text>
          </Box>
          <Box w="500px">
            <Text fontSize="2xl">
              Technologies: Javascript/Typescript Express HTML MySQL CSS/SCSS
              PostgreSQL Node MongoDB React
            </Text>
          </Box>
        </VStack>
        <Container>
          <Image
            src="https://laverdadnoticias.com/export/sites/laverdad/img/2020/03/10/todd_chavez_bojack_horseman.jpg_545642105.jpg"
            alt="Profile Pic"
            borderRadius="50%"
            boxSize="350px"
          />
        </Container>
      </HStack>
    </Flex>
  );
};

export default About;
