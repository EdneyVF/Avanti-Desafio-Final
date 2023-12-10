import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="src\Components\Header\imgs\icon-header.svg" alt="" />
          <span>E-Vents</span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Explorar</a></li>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Crie seu evento</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
