import React, { useContext, useState } from 'react';
import Modal from './Modal';
import { FoodContext } from '../context/FoodContext';

const LandingPage = () => {
  const { foodList } = useContext(FoodContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const openModal = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang!</h1>
      <p className="text-lg text-gray-600 mb-8">Website Kuliner Khas Indonesia</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
        {currentItems.map((food) => (
          <div key={food.id} className="bg-white rounded-lg shadow p-4">
            {food.imageUrl && (
              <img
                src={food.imageUrl}
                alt={food.name}
                className="w-full h-32 object-cover mb-2"
              />
            )}
            <h2 className="text-lg font-bold mb-2">{food.name}</h2>
            <p className="text-gray-600 mb-2">Asal: {food.origin}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
              onClick={() => openModal(food)}
            >
              Lihat Restoran
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        {foodList.length > itemsPerPage && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={foodList.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>

      {isModalOpen && (
        <Modal food={selectedFood} closeModal={closeModal} />
      )}
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`px-2 py-1 rounded ${
                number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LandingPage;



