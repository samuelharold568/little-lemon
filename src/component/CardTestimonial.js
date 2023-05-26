import React from 'react';
import {
  Card, Stack, CardBody, Heading, Text, Image, Divider,
} from '@chakra-ui/react';

function CardTestimonial({ img, name }) {
  return (
    <Card
      minW="500px"
      h="200px"
      bg="#EDEFEE"
      direction={{ base: 'column', sm: 'row' }}
    >
      <Image
        objectFit="cover"
        alt="testimonial"
        w="150px"
        src={img}
      />
      <Stack>
        <CardBody>
          <Stack direction="row">
            <Heading color="#333333" size="md">{name}</Heading>
            <Divider h="25px" borderColor="#495E57" orientation="vertical" />
            <Text color="#495E57">enterpreneur</Text>
          </Stack>
          <Text color="#495E57" py="2">
            &quot Caffè latte is a coffee beverage of Italian origin made with espresso
            and steamed milk. &quot
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default CardTestimonial;
