import { Category } from "../../types/category";
import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className={styles.category}>
      <img className={styles.categoryImage} src={category.imageUrl} />
      <p className={styles.categoryTitle}>{category.name}</p>
    </div>
  );
}
