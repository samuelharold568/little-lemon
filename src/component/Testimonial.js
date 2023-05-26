import React from 'react';
import {
  Stack, Heading, Flex, Center,
} from '@chakra-ui/react';
import CardTestimonial from './CardTestimonial';
import bosch from '../wireframe/images/bosch.png';
import james from '../wireframe/images/james.png';
import kate from '../wireframe/images/kate.png';
import martin from '../wireframe/images/martin.png';

function Testimonial() {
  return (
    <Stack h="80vh" p="10px" bg="#333333" w="100%">
      <Center h="100%">
        <Stack className="slide" h="100%" w="90%">
          <Flex w="100%" h="100%" direction="column" justify="center" gap="15%" align="center">
            <Heading color="#EDEFEE" as="h2">Testimonials</Heading>
            <Stack w="100%" className="slide-track">
              <Flex justify="space-around" gap="20px">
                <CardTestimonial img={bosch} name="Bosch" />
                <CardTestimonial img={james} name="James" />
                <CardTestimonial img={kate} name="Kate" />
                <CardTestimonial img={martin} name="Martin" />
                <CardTestimonial img={kate} name="Kate" />
                <CardTestimonial img={bosch} name="Bosch" />
                <CardTestimonial img={james} name="James" />
              </Flex>
            </Stack>
          </Flex>
        </Stack>
      </Center>
    </Stack>
  );
}

export default Testimonial;
