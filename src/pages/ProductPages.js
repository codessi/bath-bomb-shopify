import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { ShopContext } from '../context/shopContext'
import {Box, Grid, Image, Text, Button, Heading, Flex, Center} from '@chakra-ui/react'


const ProductPages = () => {

  const {slug} = useParams()

  const { fetchProductWithHandle, addItemtoCheckout, product} = useContext(ShopContext)

  useEffect(() => {
    fetchProductWithHandle(slug)
  }, [fetchProductWithHandle, slug])

  // console.log(product)


  if(!product.title) return <div>Loading....</div>
  return (
    <Box p="2rem">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]} m="auto">
        <Flex justifyContent="center" alignItems="center">
          <Image src = {product.images[0].src}></Image>
        </Flex>
        <Flex flexDirection="column" alignItems="center" justifyContent="center" px="2rem">
          <Heading pb="2rem">{product.title}</Heading>
          <Text fontWeight="bold" pb="2rem">{product.variants[0].price}</Text>
          <Text pb="2rem" color="gray.500">{product.description}</Text>
          <Button 
            onClick={() => { addItemtoCheckout(product.variants[0].id, 1)}}
            _hover={{opacity: '70%'}}
            w="10rem" backgroundColor="#FF38BD" color="white"
          >Add to cart</Button>
        </Flex>

      </Grid>
    </Box>
  )

}

export default ProductPages