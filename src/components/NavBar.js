import React, { useContext } from 'react'
import {Box, Flex, Icon, Image, Text} from  '@chakra-ui/react'
import { ShopConsumer, ShopContext } from '../context/shopContext'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'


const NavBar = () => {
  const { openCart, openMenu,checkout } = useContext( ShopContext )

  return (
    <Flex backgroundColor ="#FFABE2" flexDir='row' justifyContent= "space-between" p='2rem' >
      <Icon w={30} h={30} border="dotted blue" fill='white' as={MdMenu}></Icon>
      <Image src=""></Image>
      <Text>Logo</Text>
      <Text>Cart</Text>
    </Flex>
  )
}

export default NavBar
