import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Exclusive</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Help</li>
          <li>Sign In</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search for products" />
        <button>Search</button>
      </div>
      <div className="account-dropdown">
        <button>Account</button>
      </div>
    </header>
  );
}

export default Header;
