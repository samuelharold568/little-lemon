import React from 'react';
import { Link } from 'react-router-dom';
import {
  Center, Box, Heading, Text, Button, Image, Flex, Stack,
} from '@chakra-ui/react';
import heroImage from '../icons_assets/restauranfood.jpg';

function Hero() {
  return (
    <Stack bg="#495E57" w="100%">
      <Center>
        <Flex direction={{ base: 'row', sm: 'column', md: 'row' }} pt="15px" pb="15px" pos="relative" w="90%">
          <Box w={{ base: '40%', sm: '100%', md: '40%' }}>
            <Heading color="#F4CE14" mb="15px" as="h1" size="2xl">Little Lemon</Heading>
            <Heading color="#EDEFEE" mb="10px" as="h2" size="md">Samarinda</Heading>
            <Text color="#EDEFEE" mb="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
            <Button mt="15px" colorScheme="yellow"><Link to="/reservation">Reserve a Table</Link></Button>
          </Box>
          <Box pos="absolute" right="5%" top="15%">
            <Image
              display={{ base: 'block', sm: 'none', md: 'block' }}
              borderRadius="10px"
              boxSize="350px"
              objectFit="cover"
              src={heroImage}
              alt="Hero Image"
            />
          </Box>
        </Flex>
      </Center>

    </Stack>
  );
}

export default Hero;
