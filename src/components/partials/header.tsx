import React from 'react';

const Header = (): JSX.Element => {
  return (
    <nav className="shadow-md bg-white">
      <div className="max-w-7xl mx-auto pl-4 h-16">
        <div className="relative flex">
          <img src="/images/logo.png" alt="logo" />
          Header
        </div>
      </div>
    </nav>
  );
};
export default Header;
