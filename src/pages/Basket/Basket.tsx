import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem } from '../../app/features/cartSlice';
import s from '../Basket/Basket.module.scss';

const Basket = () => {
  const items = useSelector((state: any) => state.cartSlice.items);
  const { count } = useSelector((state: any) => state.cartSlice.items);
  const dispatch = useDispatch();
  const onClickPlus = (id: any) => {
    dispatch(
      addItem({
        id,
      }),
    );
  };

  const onClickMinus = (id: any) => {
    if (count !== 0) {
      dispatch(minusItem(id));
    }
  };
 
  return (
    <div className={s.basketBody}>
      <div className={s.basketHeader}>
        <p>Корзина</p>
        <div>
          { !items   ? (
            <div>Корзина пуста</div>
          ) :
          items.map((item: any) => {
            return (
              <div key={item.id} className={s.cart}>
                <div>
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                </div>
                <div>
                  <button onClick={() => onClickMinus(item.id)}>-</button>
                  {item.count}
                  <button onClick={() => onClickPlus(item.id)}>+</button>
                </div>
              </div>
            );
          })
        
        }
        </div>

      </div>
    </div>
  );
};

export default Basket;
