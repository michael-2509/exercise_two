import React from "react";
import { slicedArray } from "../../utils";
import classes from "./ProductList.module.css";

const ProductList = ({ item }) => {
  console.log(item);

  return (
    <ul className={classes.card}>
      {slicedArray(item.images, 1).map((item) => (
        <img className={classes.img} src={item} alt="phone" />
      ))}
      <li>{item.title}</li>
      <li>{item.brand}</li>
      <li>{item.description}</li>
      <li>{item.category}</li>
    </ul>
  );
};

export default ProductList;
