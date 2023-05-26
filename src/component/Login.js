import React, { useState } from 'react';
import {
  FormControl,
  Input,
  VStack,
  Heading,
  Button,
  Text,
  Stack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

function Login({
  email,
  password,
  onEmail,
  onPassword,
  onLogin,
  register,
}) {
  const [enterPassword, setEnterPassword] = useState(false);
  const handleClickEnterPassword = () => setEnterPassword(!enterPassword);

  return (
    <VStack w="400px">
      <Heading color="#EDEFEE">Login</Heading>
      <FormControl isRequired>
        <Input bg="#D6E8DB" mb="20px" placeholder="Email" id="email" type="email" value={email} onChange={onEmail} />
        <InputGroup>
          <Input bg="#D6E8DB" placeholder="Password" id="password" type={enterPassword ? 'text' : 'password'} value={password} onChange={onPassword} />
          <InputRightElement>
            <Button onClick={handleClickEnterPassword}>
              {enterPassword ? <ViewOffIcon size="sm" /> : <ViewIcon size="sm" />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button mt="30px" color="#333333" bg="#F4CE14" w="100%" type="submit" onClick={onLogin}>Send</Button>
      </FormControl>
      <Stack pos="relative" top="30px">
        <Text color="#EDEFEE">
          Create account here
          <Button
            _hover={{ borderBottom: '2px solid #4CACBC' }}
            color="#4CACBC"
            onClick={register}
          >
            register
          </Button>
        </Text>
      </Stack>
    </VStack>
  );
}

export default Login;
