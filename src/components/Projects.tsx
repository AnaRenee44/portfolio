import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const Projects: React.FC = () => {
  return (
    <Flex
      minW="100%"
      h="625"
      backgroundColor="orange.200"
      ml="-517"
      mr="-517"
      alignItems="center"
      direction="column"
    >
      <Flex paddingTop="30px">
        <Text as="u" fontSize="4xl">
          Projects
        </Text>
      </Flex>
      <Container
        minW="100%"
        ml="-517"
        mr="-517"
        h="350"
        backgroundColor="orange.100"
        opacity="50%"
        marginTop="90px"
      ></Container>
    </Flex>
  );
};

export default Projects;
