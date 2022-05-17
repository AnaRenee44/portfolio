import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Flex
      id="home"
      minW="100%"
      h="625"
      backgroundColor="blue.100"
      ml="-517"
      mr="-517"
      justifyContent="center"
      direction="column"
    >
      <Flex justifyContent="flex-start" paddingLeft="450px">
        <Text fontSize="9xl">Anastasia</Text>
      </Flex>
      <Flex justifyContent="flex-end" paddingRight="500px">
        <Text fontSize="9xl">Renee</Text>
      </Flex>
    </Flex>
  );
};

export default Home;
