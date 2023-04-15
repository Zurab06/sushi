import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
// import { isAuthMe } from '../../app/features/authSlice';
const Header = () => {
  // const isAuth = useSelector(isAuthMe);
  // console.log(isAuth);

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
          <div className={styles.login}>
            <Link to={'/login'}>
              {' '}
              {/* {isAuth: <span>Выйти</span>: <span>Войти</span>} */}
              <span>Войти</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
