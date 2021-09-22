import React from 'react';
import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import astronaut2 from '../../assets/animation/astronaut-2.json';
import TechSkills from '../TechSkills';
import backgroundImage from '../../assets/images/background.jpg';

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
    <Box id="skills" bgImage={backgroundImage}>
      <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
        <Flex>
          <Lottie
            options={{ animationData: astronaut2, ...defaultOptions }}
            width="100%"
          />
        </Flex>
        <Flex flexDirection="column">
          <Heading pb={14} size="2xl" pt={10} color="purple.100">
            Skills
          </Heading>
          <Flex className="text" w="100%" flexDirection="column">
            {textSkills.map(skill => (
              <Text pb={6} color="pink.300" fontSize="2xl">
                {skill}
              </Text>
            ))}
          </Flex>
        </Flex>
        <TechSkills />
      </Flex>
      <Flex justifyContent="center" w="100%" pt={8} alig>
        <Text fontSize="3xl" color="purple.200" mb={4} textAlign="center">
          &#x1F4AB; I'm constantly learning, currently I am improving my english
          levels.
        </Text>
      </Flex>
    </Box>
  );
};

export default Skills;
