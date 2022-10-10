import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return <ProductCard item={item} key={item.id} />;
      })}
    </>
  );
};

export default ProductList;
