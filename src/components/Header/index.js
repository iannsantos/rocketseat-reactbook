import React from 'react';
import './style.css';

import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <div className="main-header">
      <h1>reactbook.</h1>
      <div className="profile">
        <p>Meu perfil</p>
        <div>
          <FaUserCircle size="18" />
        </div>
      </div>
    </div>
  );
}

export default Header;