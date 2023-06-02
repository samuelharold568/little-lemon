import React from 'react';
import {
  VStack, HStack, Button, Heading, Center, Stack, Divider, Avatar, Text, Flex,
} from '@chakra-ui/react';
import profil from '../wireframe/images/bosch.png';

function ProfilPages({ onLogout, data, name }) {
  return (
    <main>
      <Stack pt="20px" pb="30px" minH="90vh" h={{ base: '100%', md: '100vh' }} bg="#333333">
        <Center h="100%">
          <Flex direction={{ base: 'row', sm: 'column', md: 'row' }} gap="25px" h="100%" w="90%">
            <VStack flex="1" pt="5%" spacing="4px">
              <Avatar size="2xl" src={profil} alt="profil" />
              <Text color="#EDEFEE">{name}</Text>
              <Button pos="relative" top="15px" onClick={onLogout}>Logout</Button>
            </VStack>
            <Divider mt="5%" h="80%" display={{ base: 'block', md: 'none' }} orientation="horizontal" />
            <Divider mt="5%" h="80%" display={{ base: 'none', md: 'block' }} orientation="vertical" />
            <Stack p="5%" flex="2">
              <Heading color="#EDEFEE">Order story</Heading>
              {data.map((item, index) => (
                <HStack key={index} color="#EDEFEE">
                  <Text>{item.dateV}</Text>
                  <Text>{item.timeV}</Text>
                  <Text>{item.occasionV}</Text>
                </HStack>
              ))}
            </Stack>
          </Flex>
        </Center>
      </Stack>
    </main>
  );
}

export default ProfilPages;
