import React from 'react';
import { Flex, Heading, Text, Image, Link, Button } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import astronaut3 from '../../assets/animation/astronaut-3.json';
import linkedin from '../../assets/images/linkedin.png';
import gmail from '../../assets/images/Gmail-Logo.png';
import GitHub from '../../assets/images/GitHub.png';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Contact = () => {
  return (
    <Flex flexDirection="column" backgroundColor="purple.50" id="contact">
      <Flex
        justifyContent="center"
        w="100%"
        h="xl"
        flexDirection="column"
        alignItems="center"
      >
        <Heading mb={4} size="2xl">
          Let's create something together
        </Heading>
        <Text pb={2} color="pink.500" fontSize="3xl">
          &#x1F33B; Contact me!
        </Text>
        <Lottie
          options={{ animationData: astronaut3, ...defaultOptions }}
          width={400}
          height={400}
        />
      </Flex>
      <Flex justifyContent="space-evenly" w="100%" py={16}>
        <Flex alignItems="center" flexDirection="column" w="sm">
          <Image
            src={linkedin}
            boxSize="100"
            borderRadius="full"
            boxShadow="dark-lg"
            mb={4}
          />
          <Text color="purple.600" fontSize="xl">
            <Link
              href="https://www.linkedin.com/in/auracristina0693/"
              target="_blank"
            >
              &#x1F33C; auracristina0693
            </Link>
          </Text>
        </Flex>
        <Flex alignItems="center" flexDirection="column" w="sm">
          <Image
            src={GitHub}
            boxSize="100"
            borderRadius="full"
            boxShadow="dark-lg"
            mb={4}
          />
          <Text color="purple.600" fontSize="xl">
            <Link href="https://github.com/auracristina0693" target="_blank">
              &#x1F33B; auracristina0693
            </Link>
          </Text>
        </Flex>
        <Flex alignItems="center" flexDirection="column" w="sm">
          <Image
            src={gmail}
            boxSize="100"
            borderRadius="full"
            boxShadow="dark-lg"
            mb={4}
          />
          <Button colorScheme="purple" variant="solid" size="md">
            <Link href="mailto:auracristina0693@gmail.com" target="_blank">
              &#x1F337; auracristina0693
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
