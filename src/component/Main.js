import React from 'react';
import { Flex, Spacer, Center } from '@chakra-ui/react';
import Hero from './Hero';
import Highlights from './Highlights ';
import Testimonial from './Testimonial';
import Maps from './Maps';

function Main() {
  return (
    <main>
      <Center>
        <Flex w="100%" align="center" direction="column">
          <Hero />
          <Spacer />
          <Highlights />
          <Testimonial />
          <Maps />
        </Flex>
      </Center>
    </main>
  );
}

export default Main;
