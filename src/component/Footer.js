import React from 'react';
import {
  Flex, Text, Center, Stack, Image, List, ListItem, UnorderedList, Heading, Highlight,
} from '@chakra-ui/react';
import instagram from '../icons_assets/instagram.png';
import facebook from '../icons_assets/facebook.png';
import twitter from '../icons_assets/twitter.png';
import logo from '../icons_assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <Stack bg="#EDEFEE" w="100%">
        <Center>
          <Flex mt="5%" mb="3%" h="100%" w="90%" justify="space-around" direction={{ base: 'row', sm: 'column', md: 'row' }} gap={15}>
            <Stack>
              <Heading as="h4">Contact:</Heading>
              <UnorderedList>
                <List spacing={3}>
                  <ListItem>
                    <Highlight
                      query="Adress"
                      styles={{
                        px: '2', py: '1', rounded: 'full', fontSize: 'lg',
                      }}
                    >
                      Adress: Jalan Gunung Lingai | Samarinda | Kalimantan-Timur
                    </Highlight>
                  </ListItem>
                  <ListItem>
                    <Highlight
                      query="Phone"
                      styles={{
                        px: '2', py: '1', rounded: 'full', fontSize: 'lg',
                      }}
                    >
                      Phone: +62-877-12376337
                    </Highlight>
                  </ListItem>
                  <ListItem>
                    <Highlight
                      query="Email"
                      styles={{
                        px: '2', py: '1', rounded: 'full', fontSize: 'lg',
                      }}
                    >
                      Email: samuelharold327@gmail.com
                    </Highlight>
                  </ListItem>
                </List>
              </UnorderedList>
            </Stack>
            <Stack>
              <Heading as="h4">Social media:</Heading>
              <UnorderedList>
                <List spacing={3}>
                  <ListItem>
                    <Flex align="center" gap="5px">
                      <Image h="30px" src={instagram} alt="instagram" />
                      <Text fontSize="lg">instagram</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center" gap="5px">
                      <Image h="30px" src={facebook} alt="facebook" />
                      <Text fontSize="lg">facebook</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="center" gap="5px">
                      <Image h="30px" src={twitter} alt="twitter" />
                      <Text fontSize="lg">twitter</Text>
                    </Flex>
                  </ListItem>
                </List>
              </UnorderedList>
            </Stack>
          </Flex>
        </Center>
        <Center mb="15px" p={15}>
          <Image w="200px" src={logo} alt="logo" />
        </Center>
      </Stack>
    </footer>
  );
}

export default Footer;
