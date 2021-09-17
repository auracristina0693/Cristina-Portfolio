import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import react from '../../assets/images/react.png';
import SkillCircle from '../SkillCircle';

const TechSkills = () => {
  return (
    <Box w="5xl">
      <Flex my={4}>
        <SkillCircle image={html} text="HTML" />
        <SkillCircle image={js} text="Javascript" />
      </Flex>
      <Flex my={4}>
        <SkillCircle image={css} text="CSS" />
        <SkillCircle image={react} text="REACT" />
      </Flex>
    </Box>
  );
};

export default TechSkills;
