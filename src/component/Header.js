import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex, Center, Image, Box,
} from '@chakra-ui/react';
import Nav from './Nav';
import logo from '../icons_assets/Logo.svg';
import DrawerMenu from './Drawer';

function Header({ isLogin }) {
  return (
    <header>
      <Center bg="#EDEFEE">
        <Flex w="90%" h="75px" justify="space-between" align="center">
          <Link to="/"><Image src={logo} alt="logo" /></Link>
          <Box
            as="nav"
            display={{
              base: 'block', sm: 'none', md: 'none', lg: 'block', xl: 'block',
            }}
          >
            <Nav isLogin={isLogin} />
          </Box>
          <Box
            display={
              {
                sm: 'block', md: 'block', lg: 'none', xl: 'none',
              }
            }
          >
            <DrawerMenu isLogin={isLogin} />
          </Box>
        </Flex>
      </Center>
    </header>
  );
}

export default Header;
