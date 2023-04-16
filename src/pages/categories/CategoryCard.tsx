import React from 'react';
import styles from '../categories/Categories.module.scss';
import { categoryItem } from '../../data/products';
import { useParams } from 'react-router-dom';
type MyDataType = {};
const Categories = (item: any) => {
  const { id } = useParams()
  return (
    <>
    
      <div className={styles.main}>
        <div className={styles.itemName}>{item.name}</div>
        <img className={styles.img} src={item.Image} alt="fxth" />
        <div></div>
      </div>
    </>
  );
};

export default Categories;
