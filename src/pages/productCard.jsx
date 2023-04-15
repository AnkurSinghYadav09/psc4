import React from "react";
import { Badge, Box, Image } from "@chakra-ui/react";
const ProductCard = (item) => {
//   console.log(item.items);
  return (
    <div>
       
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={item.items.img} alt={item.items.imageAlt} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {item.items.brand} beds &bull; {item.items.category} baths
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {item.items.title}
          </Box>
          <Box>
            {item.items.price}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>
          {item.items.id} {item.items.details}
        </Box>
      </Box>
    </div>
  );
};

export default ProductCard;
