import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Stack, Flex, Heading, Text, Center,
  useToast,
} from '@chakra-ui/react';
import Register from '../component/Register';
import Login from '../component/Login';
import useFormInput from '../customHook/useFormInput';
import { register, login } from '../utils/endpoint';

function AuthPage({ onLogin }) {
  const navigate = useNavigate();
  const toast = useToast();
  const [dataName, resetName] = useFormInput('');
  const [dataEmail, resetEmail] = useFormInput('');
  const [tesPassword, resetTesPassword] = useFormInput('');
  const [dataPassword, resetPassword] = useFormInput('');
  const [user, setUser] = useState(false);
  const name = dataName.value;
  const email = dataEmail.value;
  const password = dataPassword.value;

  const disabledHandler = tesPassword.value !== password;

  const loginHandler = async (e) => {
    e.preventDefault();

    const { error, data } = await login({ email, password });
    console.log('ini onlogin data', data);

    if (!error) {
      onLogin(data);
      navigate('/');
    }
  };
  const userHandler = () => {
    resetName('');
    resetEmail('');
    resetTesPassword('');
    resetPassword('');
    setUser(!user);
  };
  const registerHandler = async (e) => {
    e.preventDefault();

    const { error } = await register({ name, email, password });

    if (error) {
      return;
    }

    if (!error) {
      toast({
        position: 'top-center',
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      userHandler();
    }
  };

  return (
    <main>
      <Stack h={{ base: '100%', md: '100vh' }} w="100%" bg="#495E57">
        <Center h="100%">
          <Flex gap="40px" direction={{ base: 'column', md: 'row' }} pt="5%" h="100%" w="90%" justify="space-between">
            <Stack>
              <Heading color="#F4CE14" mb="15px" as="h1" size="2xl">Little Lemon</Heading>
              <Heading color="#EDEFEE" mb="10px" as="h2" size="md">Samarinda</Heading>
              <Text color="#EDEFEE" mb="20px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br />
                {' '}
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                {' '}
                Ut enim ad minim veniam.
              </Text>
            </Stack>
            <Flex mb="80px" justify="center">
              { user
                ? (
                  <Register
                    name={dataName.value}
                    email={dataEmail.value}
                    tesPassword={tesPassword.value}
                    password={dataPassword.value}
                    onName={dataName.onChange}
                    onEmail={dataEmail.onChange}
                    onTesPassword={tesPassword.onChange}
                    onPassword={dataPassword.onChange}
                    onRegister={registerHandler}
                    disabled={disabledHandler}
                  />
                )
                : (
                  <Login
                    email={dataEmail.value}
                    password={dataPassword.value}
                    onEmail={dataEmail.onChange}
                    onPassword={dataPassword.onChange}
                    onLogin={loginHandler}
                    register={userHandler}
                  />
                )}
            </Flex>
          </Flex>
        </Center>
      </Stack>
    </main>
  );
}

export default AuthPage;
