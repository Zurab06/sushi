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

  useEffect(() => {
    try {
      const getItems = async function () {
        const { data } = await axios.get<IItem>(
          `https://fakestoreapi.com/products/${id}`
        );
        setItem(data);
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
  );
};

export default CategoryItem;
