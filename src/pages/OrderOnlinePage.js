import React from 'react';
import { Stack, Center, Image } from '@chakra-ui/react';
import comic from '../icons_assets/comic.png';

function OnlinePage() {
  return (
    <Stack h="90vh" w="100%">
      <Center h="100%">
        <Image h="150px" src={comic} alt="not available" />
      </Center>
    </Stack>
  );
}

export default OnlinePage;
