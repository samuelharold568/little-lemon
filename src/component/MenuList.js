import React from 'react';
import { Stack, Flex, Center } from '@chakra-ui/react';
import ListItem from './ListItem';

function MenuList({
  breakfast,
  dessert,
  vegan,
  chicken,
  seafood,
  pasta,
  vegetarian,
}) {
  return (
    <Center>
      <Stack pt="40px" w="500px">
        <Flex direction="column" gap="40px">
          <ListItem
            category="Breakfast"
            listMenu={breakfast}
          />
          <ListItem
            category="Dessert"
            listMenu={dessert}
          />
          <ListItem
            category="Vegan"
            listMenu={vegan}
          />
          <ListItem
            category="Chicken"
            listMenu={chicken}
          />
          <ListItem
            category="Seafood"
            listMenu={seafood}
          />
          <ListItem
            category="Pasta"
            listMenu={pasta}
          />
          <ListItem
            category="Vegetarian"
            listMenu={vegetarian}
          />
        </Flex>
      </Stack>
    </Center>
  );
}

export default MenuList;
