import s from '../Sets/Sets.module.scss';
import setsLogo from '../../assets/img/setsLogo.png';
import { products } from './db';
import { useDispatch } from 'react-redux';
import { addItem } from '../../app/features/cartSlice';
const Sets = () => {
  const dispatch = useDispatch();

  const addProduct = (id: any) => {
    const prod = products.find((el: any) => el.id === id);
    console.log(prod);
    dispatch(addItem(prod));
  };

  return (
    <div className={s.sets_body}>
      <div className={s.sets_header}>
        <img src={setsLogo} alt="" />
        <p>Сеты</p>
        <div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <ul className="dropdown-content">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
  </ul>
</div>

      </div>
     
        {products?.map((item: any) => {
          return (
            <div key={item.id} className={s.cart}>
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
                  <button onClick={() => addProduct(item.id)}>Хочу!</button>
                </div>
              </div>
            </div>
          );
        })}
      
    </div>
  );
};

export default Sets;
