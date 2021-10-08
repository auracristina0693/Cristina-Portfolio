import React from 'react';
import { Flex, Text, Box, Button, Image, Link } from '@chakra-ui/react';
import bgPicture from '../../assets/images/bg-Picture.png';
import picture from '../../assets/images/foto-hero.jpg';
import backgroundImage from '../../assets/images/background.jpg';

const Hero = () => {
  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      wrap="wrap"
      id="home"
      bgImage={backgroundImage}
    >
      <Flex flexDirection="column" justifyContent="flex-end">
        <Box my={8}>
          <Flex justifyContent="center">
            <Text
              color="purple.100"
              fontWeight="bold"
              fontSize={{ base: '3xl', md: '5xl' }}
              textAlign="center"
            >
              Aura
            </Text>
            <Text
              fontWeight="bold"
              fontSize={{ base: '3xl', md: '5xl' }}
              mx={4}
              color="purple.300"
              textAlign="center"
            >
              Cristina
            </Text>
          </Flex>
          <Text
            color="purple.100"
            fontWeight="bold"
            fontSize={{ base: '3xl', md: '5xl' }}
            textAlign="center"
          >
            Salazar Quintero
          </Text>
        </Box>
        <Text
          fontSize={{ base: 'xl', md: '3xl' }}
          color="pink.300"
          textAlign="center"
        >
          I'm the fronted developer you <br />
          are looking for &#x1F49C;
        </Text>
        <Flex w="100%" justifyContent="center">
          <Link
            href="https://drive.google.com/file/d/1qeo73jPMjH-OWKM-pUCAJajOZBVz2_La/view?usp=sharing"
            target="_blank"
          >
            <Button mt={6} colorScheme="purple" variant="solid" size="md">
              Download my CV
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        bgImage={bgPicture}
        width="lg"
        height="lg"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={picture} borderRadius="full" boxSize="350px" />
      </Flex>
    </Flex>
  );
};

export default Hero;
