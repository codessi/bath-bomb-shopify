import React, { useContext } from 'react'
import {Box, Flex, Icon, Image, Text, Badge} from  '@chakra-ui/react'
import { ShopConsumer, ShopContext } from '../context/shopContext'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'



const NavBar = () => {
  const { openCart, openMenu,checkout } = useContext( ShopContext )

  return (
    <Flex backgroundColor ="#FFABE2" flexDir='row' justifyContent= "space-between" alignItems="center" p='2rem' >
      <Icon w={30} h={30}fill='white' as={MdMenu} 
        onClick= {()=> openMenu()}
      ></Icon>
      <Link to="/">
        <Image src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540" w={100} h={100}></Image>
      </Link>
      <Box >
        <Icon fill="white" cursor="pointer" as={MdShoppingBasket} w={30} h={30}
        onClick={ () => openCart()}
        />
        <Badge mb="10" color="white" backgroundColor = "#FF38BD" borderRadius="50%">{checkout.lineItems?.length }</Badge>
      </Box>
    
    </Flex>
  )
}

export default NavBar
