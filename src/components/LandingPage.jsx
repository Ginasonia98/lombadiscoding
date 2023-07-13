import React, { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoInformationCircleOutline } from 'react-icons/io5';
import Modal from './Modal';
import { FoodContext } from '../context/FoodContext';

const LandingPage = () => {
  const { foodList } = useContext(FoodContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFoodList, setFilteredFoodList] = useState(null);
  const itemsPerPage = 10;

  const openModal = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchTerm('');
      setFilteredFoodList(null);
      setCurrentPage(1);
    } else {
      const filteredItems = foodList.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCurrentPage(1);
      setFilteredFoodList(filteredItems);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoodList || foodList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="xl:text-4xl lg:text-2xl md:text-xl sm:text-lg font-bold mb-4 text-center text-gray-800">Welcome Food Hunters!</p>
      <p className="xl:text-4xl lg:text-2xl md:text-xl sm:text-lg text-gray-800 mb-8 text">Culinary Indonesia Website</p>

      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Find your food"
          className="border border-gray-300 rounded-l py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white py-2 px-4 rounded-r flex items-center"
          onClick={handleSearch}
        >
          <FiSearch className="mr-2" />
          Search
        </button>
      </div>

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
            <p className="text-gray-600 mb-2">Origin: {food.origin}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
              onClick={() => openModal(food)}
            >
              <IoInformationCircleOutline className="mr-2 inline" />
              See Detail
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

      {isModalOpen && <Modal food={selectedFood} closeModal={closeModal} />}
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => i + 1);

  return (
    <nav>
      <ul className="flex space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`px-2 py-1 rounded ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
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









