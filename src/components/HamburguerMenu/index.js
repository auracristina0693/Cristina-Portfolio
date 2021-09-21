import React from 'react';
import {
  Box,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

export const HamburguerMenu = () => {
  return (
    <Box display={{ sm: 'base', md: 'none' }}>
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
              <Link to="home" smooth={true} duration={1000}>
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="projects" smooth={true} duration={1000}>
                Projects
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="skills" smooth={true} duration={1000}>
                Skills
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Menu>
    </Box>
  );
};

export default HamburguerMenu;
