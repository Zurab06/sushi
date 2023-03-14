import React, { useState } from 'react';
import styles from './PersonalData.module.scss';

const PersonalData = () => {
  //update
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [courier, setCourier] = useState('Курьером');
  const [street, setStreet] = useState('');
  const [flat, setFlate] = useState('');
  const [entrance, setEntrance] = useState('');
  const [floor, setFloor] = useState('');
  const [code, setCode] = useState('');
  const [cash, setCash] = useState('Наличными');
  const [oddMoney, setOddMoney] = useState(false);
  const [sum, setSum] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Ваши данные</h1>
        <div className={styles.data}>
          <input className={styles.surname} placeholder="Фамилия" type="text" name="surname" />
          <input className={styles.name} placeholder="Имя" type="text" name="name" />
        </div>
        <div className={styles.delivery}>
          <button className={styles.courier}>Курьером</button>
          <button className={styles.pickup}>Самовывоз</button>
        </div>
        <div className={styles.adress}>
          <input type="text" placeholder="Улица" name="street" className={styles.street} />
          <input type="text" placeholder="Дом" name="home" className={styles.home} />
          <input type="text" placeholder="Кв" name="flat" className={styles.flat} />
          <input type="text" placeholder="Подъезд" name="entrance" className={styles.entrance} />
          <input type="text" placeholder="Этаж" name="floor" className={styles.floor} />
          <input type="text" placeholder="Код" name="code" className={styles.code} />
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
          <input type="text" placeholder="Сумма" className={styles.sum} />
        </div>
        <div className={styles.email}>
          <input type="text" placeholder="E-mail(Необязательно)" />
          <input type="text" placeholder="Комменатрий к заказу" />
        </div>
        <button className={styles.btn}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default PersonalData;
