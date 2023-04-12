import { useState } from 'react'
import Categories from '../categories/CategoryCard'
import styles from '../MainPage/MainPage.module.scss'
import { categoryItem } from '../../data/products'
interface ICategory {
  name: string;
  weight: number;
  pieces: number;
  price: number;
}
interface IMainProps {
  categoryItem: Array<ICategory>
}


const MainPage = () => {
  const [categories, setCategories] = useState(categoryItem)
  console.log(categories);
  return (
    <div className={styles.container}>
      {
        categories?.map((item: any) => (<Categories key={item.id} {...item} />))
      }
      <div>{}</div>
    </div>
  )
}

export default MainPage