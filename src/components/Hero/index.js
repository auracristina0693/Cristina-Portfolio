import React from 'react';
import { Flex, Heading, Text, Box, Button, Image } from '@chakra-ui/react';
import bgPicture from '../../assets/images/bg-Picture.png';
import picture from '../../assets/images/foto-hero.jpg';

const Hero = () => {
  return (
    <Flex justifyContent="space-evenly" alignItems="center" wrap="wrap">
      <Flex flexDirection="column" justifyContent="flex-end">
        <Box my={8}>
          <Flex>
            <Heading size="3xl">Aura</Heading>
            <Heading mx={4} size="3xl" color="purple.500">
              Cristina
            </Heading>
          </Flex>
          <Heading size="3xl">Salazar Quintero</Heading>
        </Box>
        <Text fontSize={{ base: 'xl', md: '3xl' }} color="pink.500">
          I'm the fronted developer you <br />
          are looking for &#x1F49C;
        </Text>
        <Flex w="100%">
          <Button my={8} colorScheme="purple" variant="solid" size="md">
            Download my CV
          </Button>
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
