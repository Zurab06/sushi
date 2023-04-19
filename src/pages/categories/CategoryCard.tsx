import React from 'react';
import styles from '../categories/Categories.module.scss';
import { categoryItem } from '../../data/products';
import { Routes,Route, useParams } from 'react-router-dom';
import CategoryItem from '../../components/categoryItem/CategoryItem';
type MyDataType = {};
const Categories: React.FC = (products:any) => {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.itemName}>{products.name}</div>
        <img className={styles.img} src={products.Image} alt="nhjb" />
        <div></div>
      </div>
    </>
  );
};

export default Categories;
