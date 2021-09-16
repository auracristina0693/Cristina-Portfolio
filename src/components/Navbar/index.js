import React from 'react';
import { HStack, Link, Text } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <HStack
      w="100%"
      className="navbar"
      spacing={8}
      color="gray.700"
      justifyContent="flex-end"
      alignItems="center"
      fontSize="2xl"
      py={8}
    >
      <Text>
        <Link href="/">Home</Link>
      </Text>
      <Text>
        <Link href="/">Projects</Link>
      </Text>
      <Text>
        <Link href="/">Skills</Link>
      </Text>
      <Text>
        <Link href="/">Contact</Link>
      </Text>
    </HStack>
  );
};

export default Navbar;
