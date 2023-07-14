import React from 'react';

const Card = () => {
  const cardData = [
    {
      imageUrl: 'https://example.com/image1.jpg',
      date: 'July 1, 2023',
      title: 'Card 1',
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      date: 'July 2, 2023',
      title: 'Card 2',
    },
    {
      imageUrl: 'https://example.com/image3.jpg',
      date: 'July 3, 2023',
      title: 'Card 3',
    },
    {
      imageUrl: 'https://example.com/image4.jpg',
      date: 'July 4, 2023',
      title: 'Card 4',
    },
    {
      imageUrl: 'https://example.com/image5.jpg',
      date: 'July 5, 2023',
      title: 'Card 5',
    },
    {
      imageUrl: 'https://example.com/image5.jpg',
      date: 'July 5, 2023',
      title: 'Card 5',
    },
    {
      imageUrl: 'https://example.com/image5.jpg',
      date: 'July 5, 2023',
      title: 'Card 5',
    },
    {
      imageUrl: 'https://example.com/image5.jpg',
      date: 'July 5, 2023',
      title: 'Card 5',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      <h2 className="text-gray-900 font-bold underline text-xl sm:text-sm mb-4 mx-auto">Restaurant Recommendations For You</h2>
      <div className="flex overflow-x-auto max-w-full scrollbar">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-transparent border border-gray-300 rounded-lg p-2 mx-2 my-4 text-center"
            style={{ width: '150px', height: '200px' }}
          >
            <h3 className="text-gray-900 text-base font-semibold mb-1">{card.title}</h3>
            <img src={card.imageUrl} alt="Card" className="w-full h-auto mb-2" />
            <p className="text-gray-600 text-sm">{card.date}</p>
            <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg">
              Load More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;




