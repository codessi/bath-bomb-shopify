import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ShopContext } from "../context/shopContext";
import { Box, Flex, Button, Text, Image, Heading } from "@chakra-ui/react";

const ImageWithText = ({ reverse, image, heading, text }) => {
  const reverseSection = reverse ? "row-reverse" : "row";
  const { products } = useContext(ShopContext);

  return (
    <Box>
      <Flex flexDir={["column", reverseSection]} w="100%">
        <Image src={image} objectFit="cover" w={["100%", "50%"]} />
        <Box
          w={["100%", "50%"]}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Heading p="2rem">{heading && heading}</Heading>
          <Text p="2rem">{text && text}</Text>
          <Link to={`/products/${products[0]?.handle}`} key={products[0]?.id}>
            <Button
              w="10rem"
              backgroundColor="#FF38BD"
              color="white"
              _hover={{ opacity: "70%" }}
            >
              Buy Now
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default ImageWithText;
