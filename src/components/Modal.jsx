import React from 'react';

const Modal = ({ food, closeModal }) => {
  const openRecipeLink = () => {
    window.open(food.sourceUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow p-8 max-w-md">
        <h2 className="text-xl font-bold mb-4 underline">{food.name}</h2>
        <p className="text-gray-800 mb-2">Origin: {food.origin}</p>
        <p className="text-gray-800 mb-4">Ingredients: {food.ingredients}</p>
        {food.sourceUrl && (
          <p className="text-gray-800 mb-4">
            Recipe link:
            <a
              href={food.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 underline ml-2"
              onClick={openRecipeLink}
            >
              {food.sourceUrl}
            </a>
          </p>
        )}
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


