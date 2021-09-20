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
      <Box display={{ sm: 'block', md: 'none' }}>
        <Menu>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <a href="#projects">Projects</a>
              </MenuItem>
              <MenuItem>
                <Link href="#skills">Skills</Link>
              </MenuItem>
              <MenuItem>
                <Link href="#contact">Contact</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Menu>
      </Box>
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
