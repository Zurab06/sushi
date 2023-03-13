import React from 'react';
import styles from './PersonalData.module.scss';

const PersonalData = () => {
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
      </div>
    </div>
  );
};

export default PersonalData;
