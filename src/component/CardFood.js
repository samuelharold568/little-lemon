import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardBody, CardFooter, Button, Heading, Text, Flex, Image,
} from '@chakra-ui/react';

function CardFood({
  img, icon, title, price,
}) {
  return (
    <Card
      bg="#EDEFEE"
      maxW="350px"
      w={{
        sm: '98%', md: '280px', lg: '260px', xl: '250px',
      }}
    >
      <Image
        h="200px"
        objectFit="cover"
        src={img}
        alt="card image"
        borderRadius="lg"
      />
      <CardBody>
        <Flex justify="space-between">
          <Heading color="#333333" as="h3" size="md">{title}</Heading>
          <Text color="#EE9972">
            $
            {price}
          </Text>
        </Flex>
        <Text color="#495E57" mt="15px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
      </CardBody>
      <CardFooter>
        <Button rightIcon={<Image h="13px" objectFit="cover" src={icon} />} bg="#F4CE14" size="sm"><Link to="/online">Order online</Link></Button>
      </CardFooter>
    </Card>
  );
}

export default CardFood;
