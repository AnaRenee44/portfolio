import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const NavBar: React.FC = () => {
  const scrollTo = (id: string) => {
    const anchor: Element | null = document.querySelector(id);
    if (anchor !== null) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          scrollTo("#home");
        }}
      >
        <Text fontSize="2xl">Anastasia</Text>
      </div>
      <Spacer />
      <HStack>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            scrollTo("#about-me");
          }}
        >
          <Text fontSize="2xl">About</Text>
        </div>
        <Spacer />
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            scrollTo("#projects");
          }}
        >
          <Text fontSize="2xl">Projects</Text>
        </div>
        <Spacer />
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            scrollTo("#contact-me");
          }}
        >
          <Text fontSize="2xl">Connect</Text>
        </div>
        <Spacer />
        <a
          href="https://www.linkedin.com/in/anastasia-bennett/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://img.icons8.com/material/48/000000/linkedin--v1.png"
            alt="LinkedIn"
          />
        </a>
        <Spacer />
        <a
          href="https://github.com/AnaRenee44"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://img.icons8.com/material/48/000000/github.png"
            alt="Github"
          />
        </a>
      </HStack>
    </Flex>
  );
};

export default NavBar;
