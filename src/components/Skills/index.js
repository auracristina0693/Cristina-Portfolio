import React from 'react';
import { Flex, Heading, Text, Image, Box } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import astronaut2 from '../../assets/animation/astronaut-2.json';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.png';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Skills = () => {
  const textSkills = [
    '\uD83D\uDE4B\u200D\u2640 Work in Team',
    ' \uD83D\uDC69\u200D\uD83C\uDF93 Autodidact',
    '\uD83D\uDC69\u200D\uD83D\uDCBB Continuos learning',
    '\uD83D\uDE80 Adaptation to change',
    '\uD83D\uDD75\u200D\u2640 Problem resolution',
    '	\uD83E\uDDCF Interpersonal skills',
  ];

  return (
    <Box id="skills">
      <Flex>
        <Flex
          justifyContent="center"
          w="100%"
          h="lg"
          flexDirection="column"
          backgroundColor="purple.50"
          alignItems="center"
        >
          <Lottie
            options={{ animationData: astronaut2, ...defaultOptions }}
            width={450}
            height={450}
            pl={10}
          />
        </Flex>
        <Flex h="lg" w="4xl" flexDirection="column">
          <Heading pb={14} size="2xl" pt={10}>
            Skills
          </Heading>
          <Flex className="text" w="100%" flexDirection="column">
            {textSkills.map(skill => (
              <Text pb={6} color="pink.500" fontSize="2xl">
                {skill}
              </Text>
            ))}
          </Flex>
        </Flex>
        <Flex w="md" h="lg">
          <Flex
            w="sm"
            h="sm"
            flexDirection="column"
            pt={16}
            justifyContent="space-evenly"
            pr={16}
          >
            <Image
              src={html}
              borderRadius="full"
              boxSize="110"
              mb={4}
              boxShadow="dark-lg"
            />
            <Text fontSize="2xl" pl={5} pb={5} color="purple.700">
              Html
            </Text>
            <Image
              src={css}
              borderRadius="full"
              boxSize="110"
              mb={4}
              boxShadow="dark-lg"
            />
            <Text fontSize="2xl" pl={5} pb={5} color="purple.700">
              Css
            </Text>
          </Flex>
          <Flex
            w="sm"
            h="sm"
            flexDirection="column"
            pt={16}
            justifyContent="space-evenly"
            pr={16}
          >
            <Image
              src={js}
              borderRadius="full"
              boxSize="100"
              mb={4}
              boxShadow="dark-lg"
            />
            <Text fontSize="2xl" pr={5} pb={5} color="purple.700">
              Javascript
            </Text>
            <Image
              src={react}
              boxSize="100"
              borderRadius="full"
              mb={4}
              boxShadow="dark-lg"
            />
            <Text fontSize="2xl" pr={5} pb={5} color="purple.700">
              React
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        w="100%"
        h={36}
        backgroundColor="purple.50"
        pt={8}
      >
        <Text fontSize="3xl" color="purple.500">
          &#x1F4AB; I'm constantly learning, currently I am improving my english
          levels.
        </Text>
      </Flex>
    </Box>
  );
};

export default Skills;
