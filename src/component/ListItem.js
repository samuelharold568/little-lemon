import React from 'react';
import { Link } from 'react-router-dom';
import {
  VStack, Text, Flex, Heading,
} from '@chakra-ui/react';

function ListItem({ listMenu, category }) {
  return (
    <VStack w="100%">
      <Heading size="md" textTransform="uppercase" color="#EE9972" w="100%" textAlign="left" as="h3">
        {' '}
        {category}
      </Heading>
      {
        listMenu.map((item) => {
          const randomNum = Math.floor(Math.random() * 89) + 10;

          return (
            <Flex key={item.idMeal} w="100%" justify="space-between">
              <Text _hover={{ borderBottom: '2px solid #FBDABB' }} color="#FBDABB">
                <Link to={`/detail/${item.idMeal}`}>
                  {item.strMeal}
                </Link>
              </Text>
              <Text color="#FBDABB">
                $
                {randomNum}
              </Text>
            </Flex>
          );
        })
      }
    </VStack>
  );
}

export default ListItem;
