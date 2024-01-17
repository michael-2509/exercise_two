import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductList from "./ProductList";
import classes from "./Products.module.css";

import { slicedArray } from "../../utils";
import ProductCategory from "./ProductCategory";

const Products = () => {
  const [Data, setData] = useState([]);
  let newData = [];

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setData(response.data.products);
  };

  if (Data.length === 0) {
    // console.log("Empty", Data);
    return <p>No data</p>;
  }

  if (Data) {
    newData = slicedArray(Data, 10);
  }

  return (
    <div>
      <ProductCategory />
      <h2>PRODUCT LIST</h2>
      <div className={classes.product}>
        {" "}
        {newData.map((item, index) => (
          <ProductList key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
