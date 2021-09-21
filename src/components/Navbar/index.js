import React from 'react';
import { HStack, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { HamburguerMenu } from '../HamburguerMenu';

export const Navbar = () => {
  return (
    <Flex alignItems="center" h={20}>
      <HamburguerMenu />

      <HStack
        display={{ base: 'none', md: 'flex' }}
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
          <Link to="home" smooth={true} duration={1000}>
            Home
          </Link>
        </Text>
        <Text>
          <Link to="projects" smooth={true} duration={1000}>
            Projects
          </Link>
        </Text>
        <Text>
          <Link to="skills" smooth={true} duration={1000}>
            Skills
          </Link>
        </Text>
        <Text>
          <Link to="contact" smooth={true} duration={1000}>
            Contact
          </Link>
        </Text>
      </HStack>
    </Flex>
  );
};

export default Navbar;
