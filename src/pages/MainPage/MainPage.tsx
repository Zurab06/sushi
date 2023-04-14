import { useState } from 'react';
import Categories from '../categories/CategoryCard';
import styles from '../MainPage/MainPage.module.scss';
import { categoryItem } from '../../data/products';
interface ICategory {
  name: string;
  weight: number;
  pieces: number;
  price: number;
}
interface IMainProps {
  categoryItem: Array<ICategory>;
}

const MainPage = () => {
  const [categories, setCategories] = useState(categoryItem);
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      {categories?.map((item: any) => (
        <Categories {...item} />
      ))}
=======
      {
        categories?.map((item: any) => (<Categories key={item.id} {...item} />))
      }
>>>>>>> 06d675206ab48ed49a83bff21fdf501c1d416acd
      <div>{}</div>
    </div>
  );
};

export default MainPage;
