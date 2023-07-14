import React from 'react';

const Breadcrumb = () => {
  return (
    <nav className="py-2 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <ol className="flex items-center justify-center space-x-2">
        <li>
          <a href="https://www.indonesia.travel/id/id/ide-liburan/8-jenis-minuman-tradisional-indonesia-ini-punya-khasiat-bagus-untuk-jaga-kesehatan-saat-di-rumah-aja" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
            Traditional Drink
          </a>
        </li>
        <li className="flex items-center">
          <svg className="flex-shrink-0 h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M13.707 10l-3.146-3.147a.5.5 0 01.708-.708l3.646 3.646a.5.5 0 010 .708l-3.646 3.646a.5.5 0 11-.708-.708L13.707 10z" clipRule="evenodd" />
          </svg>
        </li>
        <li>
          <a href="https://www.indonesia.travel/gb/en/trip-ideas/enjoy-these-5-indonesian-traditional-snacks-while-stay-at-home" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
            Traditional Snack
          </a>
        </li>
        <li className="flex items-center">
          <svg className="flex-shrink-0 h-4 w-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M13.707 10l-3.146-3.147a.5.5 0 01.708-.708l3.646 3.646a.5.5 0 010 .708l-3.646 3.646a.5.5 0 11-.708-.708L13.707 10z" clipRule="evenodd" />
          </svg>
        </li>
        <li>
          <a href="https://www.indonesia.travel/id/id/ide-liburan/6-ide-keren-ini-bikin-liburan-keluarga-makin-seru" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
            Holiday Ideas
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;




