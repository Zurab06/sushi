import s from "../Sets/Sets.module.scss";
import setsImg from "../../assets/img/sets.png";
import { products } from "./db";

const Sets = () => {
  return (
    <div className={s.sets_body}>
      <div className={s.sets_header}>
        <img src={setsImg} alt="" />
        <p>Сеты</p>
      </div>
      <div className={s.sort_select}>
        <select className={s.select_css}>
          <option>Сортировка</option>
          <option>Пункт 1</option>
          <option>Пункт 2</option>
        </select>
      </div>
      <div>
        {products?.map((item: any) => {
          return (
            <div className={s.cart}>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className={s.cart_name}>
                <div>
                  <p>{item.name}</p>
                  <span>
                    <p>{item.weight} грамм,</p>
                    <p>{item.pieces} кусков</p>
                  </span>
                </div>
                <div className={s.cart_price}>
                  <span>{item.price} СОМ</span>
                  <button>Хочу!</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sets;
