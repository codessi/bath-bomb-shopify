import React, {useContext} from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Flex,
  Text,
  Image,

  Box,
  VStack,
} from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';


const NavMenu = () => {

  const {isMenuOpen, closeMenu} = useContext(ShopContext)

  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement='left' size='sm'>
      <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack p="2rem">
              <Link to = "/">About Us</Link>
              <Link to = "/">Learn More</Link>
              <Link to = "/">Sustainability</Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter textAlign="center">
            <Text w="100%">@ Copyright www.workingwithshopify.com</Text>
          </DrawerFooter>
        </DrawerContent>

    </Drawer>
  )
}

export default NavMenu