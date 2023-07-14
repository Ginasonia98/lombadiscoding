import React from 'react';

const Header = () => {
  const handleHomeClick = () => {
    window.location.reload();
  };

  const handlePlanATripClick = () => {
    window.open('https://ginablogtravel.netlify.app/', '_blank');
  };

  const handleExploreCulinerClick = () => {
    window.open('https://makananoleholeh.com/makanan-khas-indonesia//', '_blank');
  };

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 text-white px-4 py-2">
      <img
        src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
        alt="Logo"
        className="ml-2 h-10 w-28"
      />
      <div className="flex flex-wrap items-center text-center mt-2 sm:mt-0 sm:ml-4">
        <p className="mr-2 cursor-pointer" onClick={handleHomeClick}>
          Home
        </p>
        <p className="mr-2 cursor-pointer" onClick={handlePlanATripClick}>Plan a Trip</p>
        <p className="mr-2 cursor-pointer" onClick={handleExploreCulinerClick}>Explore Culiner</p>
      </div>
    </header>
  );
};

export default Header;


