import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stack, Heading, Text, Center, Card, CardBody, CardFooter, Image, Button,
} from '@chakra-ui/react';

function DetailMenu({ img, title, icon }) {
  return (
    <Stack w="100%" h="100%">
      <Center h="100%">
        <Card
          h={{ base: '100%', md: '70%' }}
          direction={{ base: 'column', md: 'row' }}
          overflow="hidden"
          maxW="700px"
        >
          <Image
            objectFit="cover"
            h={{ base: '40%', md: '100%' }}
            maxW={{ base: '100%', md: '500px' }}
            src={img}
            alt="menu"
          />

          <Stack h={{ base: '60%', md: '100%' }}>
            <CardBody>
              <Heading as="h3" color="#333333" size="md">{title}</Heading>

              <Text color="#495E57" py="2">
                Caffè latte is a coffee beverage of Italian origin made with espresso
                and steamed milk.
              </Text>
              <Text color="#EE9972" fontSize="2xl">
                $80
              </Text>
            </CardBody>

            <CardFooter>
              <Button color="#495E57" rightIcon={<Image h="13px" objectFit="cover" src={icon} />} bg="#F4CE14" size="sm"><Link to="/online">Order online</Link></Button>
            </CardFooter>
          </Stack>
        </Card>
      </Center>
    </Stack>
  );
}

export default DetailMenu;
