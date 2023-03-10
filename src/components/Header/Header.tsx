import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to={'/'}>
            <div className={styles.logo}>
              <img src="./assets/logo.svg" alt="Logo_sushi" />
            </div>
          </Link>
          <div className={styles.contact}>
            <span>Наш телефон:</span>
            <div className={styles.numberPhone}>89888235658</div>
            <div className={styles.numberPhone}>89286953059</div>
          </div>
          <div className={styles.headerTime}>
            <img src="./assets/headerTime.svg" alt="time" />
            <div className={styles.txt}>
              {' '}
              <div>работаем с </div>
              <div>10:00 до 00:00 </div>
            </div>
          </div>
          <div className={styles.titleSearch}>
            <img src="./assets/Search.svg" alt="Search" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
