import React from 'react';
import { HStack, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { HamburguerMenu } from '../HamburguerMenu';
import backgroundImage from '../../assets/images/background.jpg';
import { Link as ChakraLink } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex alignItems="center" h={50} bgImage={backgroundImage}>
      <HamburguerMenu />

      <HStack
        display={{ base: 'none', md: 'flex' }}
        pos="fixed"
        zIndex={2}
        w="100%"
        className="navbar"
        spacing={8}
        color="white"
        justifyContent="flex-end"
        alignItems="center"
        fontSize="2xl"
        weight="bold"
        bg="rgb(0, 0, 0)"
        opacity=".7"
        bgPosition="cover"
        pr={8}
        m={0}
      >
        <Text>
          <ChakraLink cursor="pointer">
            <Link to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </ChakraLink>
        </Text>
        <Text>
          <ChakraLink cursor="pointer">
            <Link to="projects" smooth={true} duration={1000}>
              Projects
            </Link>
          </ChakraLink>
        </Text>
        <Text>
          <ChakraLink cursor="pointer">
            <Link to="skills" smooth={true} duration={1000}>
              Skills
            </Link>
          </ChakraLink>
        </Text>
        <Text>
          <ChakraLink cursor="pointer">
            <Link to="contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </ChakraLink>
        </Text>
      </HStack>
    </Flex>
  );
};

export default Navbar;
