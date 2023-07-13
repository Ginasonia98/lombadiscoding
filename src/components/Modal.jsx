import React from 'react';

const Modal = ({ food, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow p-8 max-w-md">
        <h2 className="text-xl font-bold mb-4">{food.name}</h2>
        <p className="text-gray-600 mb-2">Restaurant: {food.restaurant}</p>
        <p className="text-gray-600 mb-4">Lokasi: {food.location}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
          onClick={closeModal}
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default Modal;
