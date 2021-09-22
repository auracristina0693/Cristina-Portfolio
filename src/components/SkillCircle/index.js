import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

export const SkillCircle = ({ image, text }) => {
  return (
    <Box mx={4}>
      <Image
        src={image}
        borderRadius="full"
        boxSize={{ base: '100px', md: '150px' }}
        objectFit="cover"
      />
      <Text align="center" fontSize="2x1" color="purple.300">
        {text}
      </Text>
    </Box>
  );
};

export default SkillCircle;
