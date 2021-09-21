import React from 'react';
import { Box, Image, Text, Link } from '@chakra-ui/react';

export const CardInfo = ({ image, text1, text2 }) => {
  return (
    <Box>
      <Image
        bg="purple.50"
        src={image}
        borderRadius="full"
        boxSize="200px"
        mt={6}
      />

      <Text color="white" fontSize="xl">
        <Link href="https://remb-it.vercel.app/" target="_blank">
          {text1}
        </Link>
      </Text>
      <Text color="white" fontSize="xl">
        <Link
          href="https://github.com/auracristina0693/remb-it"
          target="_blank"
        >
          {text2}
        </Link>
      </Text>
    </Box>
  );
};

export default CardInfo;
