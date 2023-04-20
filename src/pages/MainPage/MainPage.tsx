import { useState, useEffect } from "react";
import styles from './MainPage.module.scss'
import { Link } from "react-router-dom";
import { getCategories } from "../../api";
import { Category } from "../../types/category";
import Header from "../../components/Header/Header";
import { CategoryCard } from "../../components/CategoryCard";

const MainPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link to={`categories/${category.id}`} key={category.id}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
