import { useState } from 'react';
import Categories from '../categories/CategoryCard';
import styles from '../MainPage/MainPage.module.scss';
import { categoryItem } from '../../data/products';
import { Link } from 'react-router-dom';
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


      {categories?.map((item: any) => (
        <Link to={`categories/${item.id}`}key={item.id}><Categories  {...item} /></Link>
      ))}

      <div>{}</div>
    </div>
  );
};

export default MainPage;
