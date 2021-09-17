import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const SkillCircle = ({ image, text }) => {
  return (
    <Box mx={4}>
      <Image
        src={image}
        borderRadius="full"
        boxSize="150px"
        objectFit="cover"
      />
      <Text align="center" fontSize="2xl" color="purple.700">
        {text}
      </Text>
    </Box>
  );
};

export default SkillCircle;
