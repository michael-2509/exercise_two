import axios from "axios";
import React, { useEffect, useState } from "react";

import classes from "./ProductCategory.module.css";

const ProductCategory = () => {
  const [Data, setData] = useState([]);
  //   let newData = [];

  useEffect(() => {
    getProductCategory();
  }, []);

  const getProductCategory = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    setData(response.data);
  };

  //   if (Data.length === 0) {
  //     console.log("Empty", Data);
  //     return <p>No category</p>;
  //   }

  console.log(Data);

  //   if (Data) {
  //     newData = slicedArray(Data, 10);
  //   }

  return (
    <div>
      <h2>PRODUCT Category</h2>
      <div className={classes.category}>
        {Data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
