import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/product/productaction";
import ProductCard from "./productCard";
import { Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.products);
  console.log(product); 

  useEffect(() => {
    dispatch(productAction());
  }, []);

  return (
    <div>
      <Grid
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(3,1fr)",
        ]}
        gap={6}
      >
        {product.map((item, i) => {
          return (
            <div key={i}>
              <ProductCard items={item} />
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
