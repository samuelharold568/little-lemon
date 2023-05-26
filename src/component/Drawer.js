import React, { useRef, useState, useEffect } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Center,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Nav from './Nav';
import logo from '../icons_assets/Logo.svg';

function DrawerMenu({ isLogin }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.matches('.openDrawer')) {
        setOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  return (
    <>
      <Button className="openDrawer" ref={btnRef} colorScheme="teal" onClick={onOpenHandler}>
        <HamburgerIcon boxSize={6} />
      </Button>
      <Drawer
        isOpen={open}
        placement="right"
        onClose={onCloseHandler}
        finalFocusRef={btnRef}
        size={{
          sm: 'full', md: 'sm', lg: 'md', xl: 'md',
        }}
      >
        <DrawerOverlay />
        <DrawerContent bg="#EDEFEE">
          <DrawerCloseButton />
          <DrawerBody>
            <Center h="100%" textAlign="center">
              <Nav isLogin={isLogin} />
            </Center>
          </DrawerBody>
          <DrawerFooter>
            <Center w="100%">
              <Image src={logo} alt="logo" />
            </Center>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
