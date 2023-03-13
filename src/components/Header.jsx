import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <img
        src="../../../public/assets/troll-face.svg"
        alt="meme logo"
        width={40}
        className="header--logo"
      />
      <h2>Meme Generator</h2>
      <p>React Course - Project 3</p>
    </header>
  );
};
export default Header;
