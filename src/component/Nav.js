import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex, UnorderedList, List, ListItem,
} from '@chakra-ui/react';

function Nav({ isLogin }) {
  return (
    <UnorderedList>
      <List fontWeight="bold" fontSize="md" color="#495E57">
        <Flex
          gap={{
            sm: '35px', md: '35px', lg: '20px', xl: '20px',
          }}
          justify="space-around"
          direction={{
            sm: 'column', md: 'column', lg: 'row', xl: 'row',
          }}
        >
          <ListItem _hover={{ borderBottom: '2px solid #495E57' }}><Link to="/">HOME</Link></ListItem>
          <ListItem _hover={{ borderBottom: '2px solid #495E57' }}><Link to="/about">ABOUT</Link></ListItem>
          <ListItem _hover={{ borderBottom: '2px solid #495E57' }}><Link to="/menus">MENU</Link></ListItem>
          <ListItem _hover={{ borderBottom: '2px solid #495E57' }}><Link to="/reservation">RESERVATIONS</Link></ListItem>
          <ListItem _hover={{ borderBottom: '2px solid #495E57' }}><Link to="/online">ORDER ONLINE</Link></ListItem>
          <ListItem _hover={{ borderBottom: '2px solid #495E57' }}><Link to="/login">{isLogin ? 'MY ORDER' : 'LOGIN'}</Link></ListItem>
        </Flex>
      </List>
    </UnorderedList>
  );
}

export default Nav;
