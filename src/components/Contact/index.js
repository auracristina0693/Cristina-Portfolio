import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
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
    <Box py={8} id="contact">
      <Text
        align="center"
        fontWeight="bold"
        fontSize={{ base: '3xl', md: '5xl' }}
      >
        Let's create something together
      </Text>
      <Text align="center" pb={2} color="pink.500" fontSize="3xl">
        &#x1F33B; Contact me!
      </Text>
      <Box maxW="md" margin="0 auto">
        <Lottie
          options={{ animationData: astronaut3, ...defaultOptions }}
          width="100%"
        />
      </Box>
      <Flex justifyContent="space-evenly" py={8} wrap="wrap">
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
    </Box>
  );
};

export default Contact;
