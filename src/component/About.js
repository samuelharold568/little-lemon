import React from 'react';
import {
  Flex, Image, Stack, Heading, Center, Text,
} from '@chakra-ui/react';
import owner from '../icons_assets/owner_b.jpg';
import restaurant from '../icons_assets/lemon dessert.jpg';

function About() {
  return (
    <Stack pb="50px" h={{ base: '100vh', sm: '100%', md: '100vh' }} bg="#495E57" w="100%">
      <Center h="100%">
        <Stack id="about-page" h="100%" w="90%">
          <Flex
            pt="20px"
            h="100%"
            w="100%"
            direction={{
              base: 'row', sm: 'column', md: 'row', lg: 'row',
            }}
            justify="center"
          >
            <Stack mt="25px" h="100%" w={{ base: '35%', sm: '100%', md: '35%' }}>
              <Heading as="h2" size="xl" color="#F4CE14">Little Lemon</Heading>
              <Heading as="h3" size="md" color="#EDEFEE" mb="20px">Samarinda</Heading>
              <Text pos="relative" top="20px" color="#EDEFEE">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
            </Stack>
            <Stack
              pos="relative"
              h="100%"
              w={{ base: '65%', sm: '100%', md: '65%' }}
            >
              <Image
                zIndex="5"
                pos={{ base: 'absolute', sm: 'static', md: 'absolute' }}
                src={restaurant}
                alt="owner"
                h="300px"
                right="0"
                top="5%"
                objectFit="cover"
              />
              <Image
                pos={{ base: 'absolute', sm: 'static', md: 'absolute' }}
                src={restaurant}
                alt="restaurant"
                h="300px"
                left="10%"
                top="45%"
                objectFit="cover"
              />
            </Stack>
          </Flex>
        </Stack>
      </Center>
    </Stack>
  );
}

export default About;
