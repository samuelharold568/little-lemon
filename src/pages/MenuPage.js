import React, { useState, useEffect } from 'react';
import {
  Stack, Text, Center, Heading,
} from '@chakra-ui/react';
import { getData } from '../utils/endpoint';
import MenuList from '../component/MenuList';
import Load from '../component/Load';

function MenuPage() {
  const [meal, setMeal] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getMenu() {
      const menu = ['Dessert', 'Vegan', 'Chicken', 'Seafood', 'Pasta', 'Vegetarian', 'Breakfast'];
      const menuPromise = menu.map((item) => getData(item));
      const menuResult = await Promise.all(menuPromise);

      const newMenuData = {};
      menu.forEach((menuType, index) => {
        newMenuData[menuType] = menuResult[index];
      });

      setMeal(newMenuData);
      if (newMenuData) {
        setLoad(false);
      }
    }

    getMenu();
  }, []);

  return (
    <Stack bg="#495E57" h="100%" w="100%">
      <Center h="100%">
        <Stack mt="5%" mb="5%" h="100%" w="90%">
          <Heading color="#F4CE14" textAlign="center" as="h2">MENU</Heading>
          <Text textAlign="center" color="#EDEFEE">
            SAMPLE MENU. WE WORK WITH LOCAL FARMERS & FISHERMEN.
          </Text>
          {
            load ? <Load />
              : (
                <MenuList
                  breakfast={meal.Breakfast.data}
                  dessert={meal.Dessert.data}
                  vegan={meal.Vegan.data}
                  chicken={meal.Chicken.data}
                  seafood={meal.Seafood.data}
                  pasta={meal.Pasta.data}
                  vegetarian={meal.Vegetarian.data}
                />
              )
          }
        </Stack>
      </Center>
    </Stack>
  );
}

export default MenuPage;
