import React from 'react';
import {
  Stack, Center, Flex, Heading,
} from '@chakra-ui/react';
import CardFood from './CardFood';
import greeksalad from '../icons_assets/jhon.jpg';
import lemondessert from '../icons_assets/lemon dessert.jpg';
import delivery from '../icons_assets/motorbike.png';

function Highlights() {
  return (
    <Stack bg="#FFF8DE" pb="50px" w="100%">
      <Center>
        <Stack p="10px" w="90%">
          <Heading
            color="#EE9972"
            mt={{
              base: '180px', sm: '40px', md: '100px', lg: '180px',
            }}
            mb="25px"
            as="h2"
            size="2xl"
          >
            This weeks spesials!
          </Heading>
          <Flex wrap="wrap" justify={{ base: 'space-between', sm: 'space-around', md: 'space-between' }} rowGap={{ base: '0px', sm: '20px', md: '20px' }}>
            <CardFood icon={delivery} img={lemondessert} title="Greek salad" price="12.99" />
            <CardFood icon={delivery} img={lemondessert} title="Bruchetta" price="5.99" />
            <CardFood icon={delivery} img={lemondessert} title="Lemon Dessert" price="5.00" />
            <CardFood icon={delivery} img={lemondessert} title="Greek salad" price="12.99" />
          </Flex>
        </Stack>
      </Center>
    </Stack>
  );
}

export default Highlights;
