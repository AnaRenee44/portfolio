import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const NavBar: React.FC = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      w="100%"
      h="65"
      backgroundColor="green.200"
      backdropFilter="saturate(50%) blur(5px)"
      paddingLeft="15"
      paddingRight="15"
      alignItems="center"
    >
      <Text fontSize="2xl">Anastasia</Text>
      <Spacer />
      <HStack>
        <Text fontSize="2xl">About</Text>
        <Spacer />
        <Text fontSize="2xl">Projects</Text>
        <Spacer />
        <Text fontSize="2xl">Connect</Text>
        <Spacer />
        <Image
          src="https://img.icons8.com/material/48/000000/linkedin--v1.png"
          alt="LinkedIn"
        />
        <Spacer />
        <Image
          src="https://img.icons8.com/material/48/000000/github.png"
          alt="Github"
        />
      </HStack>
    </Flex>
  );
};

export default NavBar;
