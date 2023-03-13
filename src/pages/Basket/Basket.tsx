import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem, removeItem } from "../../features/cartSlice";
import s from "../Basket/Basket.module.scss";
import plus from "./plus2.svg";
import minus from "./minus.svg";
const Basket = () => {
  const { items, totalPrice } = useSelector((state: any) => state.cartSlice);

  const discount =
    totalPrice >= 2000 && totalPrice < 5000
      ? totalPrice / 20
      : 0 || totalPrice >= 5000
      ? totalPrice / 5
      : 0;
  const dispatch = useDispatch();
  const onClickPlus = (id: any) => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = (id: any) => {
    dispatch(minusItem(id));
  };

  const onClickRemove = (id: any) => {
      dispatch(removeItem(id));
      localStorage.removeItem('cart')
    
  };

  return (
    <div className={s.basketBody}>
      <div className={s.basketHeader}>
        <p>Корзина</p>
        <div className={s.cartBlock}>
          {items?.map((item: any) => {
            return (
              <div key={item.id} className={s.cart}>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div className={s.cartDesc}>
                  <div className={s.cartNameButton}>
                    {item.name} <button onClick={() => onClickRemove(item.id)}>X</button>
                  </div>
                  <div className={s.cartButton}>
                    <button
                      disabled={item.count === 0}
                      onClick={() => onClickMinus(item.id)}
                    >
                      <img src={minus}></img>
                    </button>
                    <p>
                      <b>{item.count}</b>
                    </p>
                    <button onClick={() => onClickPlus(item.id)}>
                      <img src={plus}></img>
                    </button>
                    <span>{item.price * item.count} COM</span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={s.total}>
            <span style={{fontSize: '24px', color:"#FF9846"}}><b>Итого</b></span>
            <div>
              <span>
                <b style={{marginRight: '5px'}}>{items.length}</b>
                {items.length === 1 ? <span>товар</span> : <span>товара</span>}
              </span>
              <span>
                <b>{totalPrice} COM</b>
              </span>
            </div>
            <hr />
            <div>
              <span>Скидка</span>
              <span>
                <b>{discount} COM</b>
              </span>
            </div>
            <hr />
            <div>
              <span>Доставка</span>
              <span>
                <b>Бесплатно</b>
              </span>
            </div>
            <hr />
          </div>
          <button className={s.btn}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
