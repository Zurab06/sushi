import { type } from 'os'
import React from 'react'
import styles from '../categories/Categories.module.scss'
import { categoryItem } from '../../data/products'

type MyDataType ={}
const Categories = (item:any) => {
  return (
    <>
    <div className={styles.main}>
        
         <div className={styles.itemName}>{item.name}</div>
        <img className={styles.img} src={item.Image} alt="fxth" /> 
        <div></div>
        
    </div>
    </>
  )
}

export default Categories