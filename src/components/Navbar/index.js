import React from 'react';
import {
  Box,
  HStack,
  Link,
  Text,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Flex,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  return (
    <Flex alignItems="center" h={20}>
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>
      </Box>
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
          <Link href="/">Home</Link>
        </Text>
        <Text>
          <Link href="#projects">Projects</Link>
        </Text>
        <Text>
          <Link href="#skills">Skills</Link>
        </Text>
        <Text>
          <Link href="#contact">Contact</Link>
        </Text>
      </HStack>
    </Flex>
  );
};

export default Navbar;
