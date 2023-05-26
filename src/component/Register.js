import React, { useState } from 'react';
import {
  FormControl,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

function Register({
  name,
  email,
  tesPassword,
  password,
  onName,
  onEmail,
  onTesPassword,
  onPassword,
  onRegister,
  disabled,
}) {
  const [newPassword, setPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleClickNewPassword = () => setPassword(!password);
  const handleClickConfirm = () => setConfirm(!confirm);

  return (
    <VStack w="400px">
      <Heading color="#EDEFEE">Register</Heading>
      <FormControl isRequired isInvalid={disabled}>
        <Input bg="#D6E8DB" mb="20px" placeholder="Name" id="name" type="text" value={name} onChange={onName} />
        <Input bg="#D6E8DB" mb="20px" placeholder="Email" id="email" type="email" value={email} onChange={onEmail} />
        <InputGroup>
          <Input bg="#D6E8DB" mb="20px" placeholder="Password" id="tespassword" type={newPassword ? 'text' : 'password'} value={tesPassword} onChange={onTesPassword} />
          <InputRightElement>
            <Button onClick={handleClickNewPassword}>
              {newPassword ? <ViewOffIcon size="sm" /> : <ViewIcon size="sm" />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <Input bg="#D6E8DB" mb="20px" placeholder="Confirm password" id="password" type={confirm ? 'text' : 'password'} value={password} onChange={onPassword} />
          <InputRightElement>
            <Button onClick={handleClickConfirm}>
              {confirm ? <ViewOffIcon size="sm" /> : <ViewIcon size="sm" />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {disabled && <FormErrorMessage>Password must be same</FormErrorMessage>}
        <Button isDisabled={disabled} mt="30px" color="#333333" bg="#F4CE14" w="100%" onClick={onRegister}>Send</Button>
      </FormControl>
    </VStack>
  );
}

export default Register;
