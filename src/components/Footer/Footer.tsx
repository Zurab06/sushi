import React from 'react';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.txt}>
          <h2>Заказать суши в Ингушетии</h2>
          <span>
            Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
            приготовленные по классическим и адаптированным к европейской аудитории рецептам, а
            также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы
            можете заказать суши в Харькове с доставкой на дом или в офис.
          </span>
        </div>
        <div className={styles.items}>
          <div className={styles.messagers}>
            <span>Выберите удобный мессенджер для общения</span>
            <div className="contactUs">
              <img src="./assets/whatsApp.svg" alt="whatsApp" />
              <img className={styles.tel} src="./assets/teleg.svg" alt="telegram" />
            </div>
          </div>

          <div className={styles.adress}>
            <span>Тел: +996 705 188 955 </span>
            <span>Тел: +996 555 188 955 </span>
            <span>Адрес: Бакаева 126</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
