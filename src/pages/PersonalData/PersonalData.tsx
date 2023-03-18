import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './PersonalData.module.scss';
import { createPersonalData } from '../../app/features/personalData';
import { AppDispatch } from '../../app/store';
const PersonalData = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [courier, setCourier] = useState('Курьером');
  const [street, setStreet] = useState('');
  const [home, setHome] = useState('');
  const [flat, setFlat] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [code, setCode] = useState('');
  const [cash, setCash] = useState('Наличными');
  const [oddMoney, setOddMoney] = useState(false);
  const [sum, setSum] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleCreatePersonalData = () => {
    dispatch(
      createPersonalData({
        surname,
        name,
        courier,
        street,
        home,
        flat,
        entrance,
        floor,
        code,
        cash,
        oddMoney,
        sum,
        email,
        comment,
      }),
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Ваши данные</h1>
        <div className={styles.data}>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className={styles.surname}
            placeholder="Фамилия"
            type="text"
            name="surname"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.name}
            placeholder="Имя"
            type="text"
            name="name"
          />
        </div>
        <div className={styles.delivery}>
          <button className={styles.courier}>Курьером</button>
          <button className={styles.pickup}>Самовывоз</button>
        </div>
        <div className={styles.adress}>
          <input
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            placeholder="Улица"
            name="street"
            className={styles.street}
          />
          <input
            value={home}
            onChange={(e) => setHome(e.target.value)}
            type="text"
            placeholder="Дом"
            name="home"
            className={styles.home}
          />
          <input
            value={flat}
            onChange={(e) => setFlat(e.target.value)}
            type="text"
            placeholder="Кв"
            name="flat"
            className={styles.flat}
          />
          <input
            value={entrance}
            onChange={(e) => setEntrance(e.target.value)}
            type="text"
            placeholder="Подъезд"
            name="entrance"
            className={styles.entrance}
          />
          <input
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            type="text"
            placeholder="Этаж"
            name="floor"
            className={styles.floor}
          />
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            placeholder="Код"
            name="code"
            className={styles.code}
          />
        </div>
        <div className={styles.payment}>
          <button className={styles.cash}>
            {' '}
            <img src="./assets/cash.svg" alt="cash" /> Наличными
          </button>
          <button className={styles.card}>
            <img width="18px" src="./assets/card.svg" alt="card" /> Картой
          </button>
        </div>
        <div className={styles.oddMoney}>
          <input type="checkbox" className={styles.checkbox} />
          <span>Подготовить сдачу с</span>
          <input
            value={sum}
            onChange={(e) => setSum(e.target.value)}
            type="text"
            placeholder="Сумма"
            className={styles.sum}
          />
        </div>
        <div className={styles.email}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail(Необязательно)"
          />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Комменатрий к заказу"
          />
        </div>
        <button onClick={() => handleCreatePersonalData()} className={styles.btn}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default PersonalData;
