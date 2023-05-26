import React from 'react';
import { Stack, Center, Spinner } from '@chakra-ui/react';

function Load() {
  return (
    <Stack h="100vh" w="100%">
      <Center h="100%">
        <Spinner size="lg" color="#F4CE14" />
      </Center>
    </Stack>
  );
}

export default Load;
