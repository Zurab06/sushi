import React from 'react';
import styles from './PersonalData.module.scss';

const PersonalData = () => {
  return (
    <div className={styles.container}>
      <div className="content">
        <h1>Ваши данные</h1>
        <div className={styles.data}>
          <input className={styles.surname} placeholder="Фамилия" type="text" name="surname" />
          <input className={styles.name} placeholder="Имя" type="text" name="name" />
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
