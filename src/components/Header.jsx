import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 text-white px-4 py-2">
      <img
        src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
        alt="Logo"
        className="ml-2 h-10 w-28"
      />
      <div className="flex flex-wrap items-center mt-2 sm:mt-0 sm:ml-4">
        <p className="mr-2">Home</p>
        <p className="mr-2">Plan Culiner</p>
        <p className="mr-2">Explore Food</p>
      </div>
    </header>
  );
};

export default Header;

