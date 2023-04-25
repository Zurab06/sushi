import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./CategoryItem.module.scss";

const CategoryItem = () => {
  const { id } = useParams();
  interface IItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: any;
  }
  const [item, setItem] = useState<IItem>();
  // useEffect(() => {
  //   console.log(products);
  // }, []);

  useEffect(() => {
    try {
      const getItems = async function () {
        const { data } = await axios.get<IItem>(
          `https://fakestoreapi.com/products/${id}`
        );
        setItem(data);

        // const { data } = await axios.get("https://6375f41b7e93bcb006be57c.mockapi.io/pizzas/" + id);
      };
      getItems();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {item && (
        <div className={styles.wrapper}>
          <div key={item.id}></div>
          <div className={styles.title}>{item.title}</div>
          <img className={styles.image} src={item.image} alt="" />
        </div>
      )}
    </div>
    // <div> 123</div>
  );
};

export default CategoryItem;
