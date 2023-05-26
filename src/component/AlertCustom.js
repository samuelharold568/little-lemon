import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

function AlertCustom({ status, date }) {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      pos="fixed"
      zIndex={10}
      w="500px"
      top="10%"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {status === 'success' ? 'Success' : 'Failed'}
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        {status === 'success' ? `Your reservation at ${date}` : 'You have to fill date'}
      </AlertDescription>
    </Alert>
  );
}

export default AlertCustom;
