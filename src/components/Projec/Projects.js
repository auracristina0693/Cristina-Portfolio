import React from 'react';
import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import Card from '../Cards';
import Lottie from 'react-lottie';
import astronaut from '../../assets/animation/astronaut-1.json';
import backgroundImage from '../../assets/images/background.jpg';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Projects = () => {
  return (
    <Box id="projects" bgImage={backgroundImage}>
      <Flex
        justifyContent="center"
        w="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Lottie
          options={{ animationData: astronaut, ...defaultOptions }}
          width={250}
          height={250}
          pl={10}
        />

        <Flex
          w="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="pink.100" size="2xl">
            Projects
          </Heading>
          <Flex>
            <Text pt={6} color="pink.300" fontSize="2xl" textAlign="center">
              &#x1F9DE;&#x200D;&#x2640; Here you will find most recent projects
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex py={20} justifyContent="space-evenly" wrap="wrap">
        <Card />
        <Card />
        <Card />
      </Flex>
    </Box>
  );
};

export default Projects;
