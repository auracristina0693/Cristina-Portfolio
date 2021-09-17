import React from 'react';
import { Flex, Text, Image, Link } from '@chakra-ui/react';
import imageR from '../../assets/images/Rem-Image.png';

export const Card = () => {
  return (
    <Flex
      backgroundSize="cover"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="xs"
      borderRadius="xl"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      bgGradient="linear-gradient(180deg, rgba(250,245,255,1) 0%, rgba(250,245,255,1) 70%, rgba(128,90,213,1) 50%, rgba(128,90,213,1) 100%)"
    >
      <Image
        bg="purple.50"
        src={imageR}
        borderRadius="full"
        boxSize="200px"
        mt={6}
      />

      <Text color="white" fontSize="xl">
        <Link href="https://remb-it.vercel.app/" target="_blank">
          ♥ Remb-It - Demo
        </Link>
      </Text>
      <Text color="white" fontSize="xl">
        <Link
          href="https://github.com/auracristina0693/remb-it"
          target="_blank"
        >
          ♥ Code
        </Link>
      </Text>
    </Flex>
  );
};

export default Card;
