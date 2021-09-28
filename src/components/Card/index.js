import React from 'react';
import { Flex, Box, Image, Text, Link } from '@chakra-ui/react';

export const Card = ({ image, name, demoUrl, gitHubUrl }) => {
  return (
    <Flex
      my={2}
      backgroundSize="cover"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="xs"
      borderRadius="xl"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      bgGradient="linear-gradient(180deg, rgba(250,245,255,1) 0%, rgba(250,245,255,1) 65%, rgba(128,90,213,1) 50%, rgba(128,90,213,1) 100%)"
    >
      <Box>
        <Image bg="purple.50" src={image} borderRadius="full" boxSize="200px" />

        <Text mt={6} color="white" fontSize="xl">
          <Link href={demoUrl} target="_blank">
            {`♥ ${name}`}
          </Link>
        </Text>
        <Text color="white" fontSize="xl">
          <Link href={gitHubUrl} target="_blank">
            ♥ Code
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Card;
