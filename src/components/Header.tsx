import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div style={{ display: 'flex' }} className="content">
          <div className="logo">
            <img src="./assets/logo.svg" alt="Logo_sushi" />
          </div>
          <div className="contact">
            <span>Наш телефон</span>
            <div className="number-1">89888235658</div>
            <div className="number-2">89286953059</div>
          </div>
          <div className="header-time">
            <img src="./assets/headerTime.svg" alt="time" />
            <div className="txt">
              {' '}
              <div>работаем с </div>
              <div>10:00 до 00:00 </div>
            </div>
          </div>
          <div className="title-search">
            <img src="./assets/Search.svg" alt="Search" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
