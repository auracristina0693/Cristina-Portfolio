import React from 'react';
import { Flex } from '@chakra-ui/react';
import CardInfo from '../CardInfo';
import imageR from '../../assets/images/Rem-Image.png';

export const Card = () => {
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
      bgGradient="linear-gradient(180deg, rgba(250,245,255,1) 0%, rgba(250,245,255,1) 70%, rgba(128,90,213,1) 50%, rgba(128,90,213,1) 100%)"
    >
      <CardInfo image={imageR} text1="♥ Remb-It - Demo" text2="♥ Code" />
    </Flex>
  );
};

export default Card;
