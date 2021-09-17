import React from 'react';
import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import Card from '../Cards';
import Lottie from 'react-lottie';
import astronaut from '../../assets/animation/astronaut-1.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Projects = () => {
  return (
    <Box>
      <Flex
        justifyContent="center"
        w="100%"
        h="md"
        flexDirection="column"
        backgroundColor="purple.50"
        alignItems="center"
      >
        <Flex w="3xl" h="md">
          <Flex
            pt={20}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Lottie
              options={{ animationData: astronaut, ...defaultOptions }}
              width={250}
              height={250}
              pl={10}
            />
          </Flex>
          <Flex
            h="lg"
            w="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading pt={20} size="2xl">
              Projects
            </Heading>
            <Flex>
              <Text pt={6} color="pink.500" fontSize="2xl">
                &#x1F9DE;&#x200D;&#x2640; Here you will find most recent
                projects
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex bg="purple.50" pb={20} justifyContent="space-evenly">
        <Card />
        <Card />
        <Card />
      </Flex>
    </Box>
  );
};

export default Projects;
