import React from 'react';
import { RiRestaurantLine } from 'react-icons/ri';

const Card = () => {
  const cardData = [
    {
      imageUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-3650608/zulaikha_zulaikha-bika-ambon-kecil-mocca-kue-basah--1000-g-_full02.jpg',
      date: 'July 16, 2023',
      title: 'Bika Zulaikha Medan',
      link: 'https://www.instagram.com/zulaikhabikaambonn/?hl=id',
      location: 'Jl. Mojopahit No 70 A-C, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20112'
    },
    {
      imageUrl: 'https://paxelmarket.co/wp-content/uploads/2021/09/CIK-ME-ME.jpg',
      date: 'July 16, 2023',
      title: 'Lumpia Cik Me Me Semarang',
      link: 'https://lunpiacikmeme.co.id/',
      location: 'Jl. Gajahmada No.107, Miroto, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50135'
    },
    {
      imageUrl: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/2/26/5b890064-7eec-4c2a-b659-692c6e8372a5.jpg',
      date: 'July 16, 2023',
      title: 'Pie Susu Dhian Bali',
      link: 'https://piesusudhianbali.com/',
      location:' Jl. Nangka No.103, Dangin Puri Kaja, Denpasar Utara, Kota Denpasar, Bali'
    },
    {
      imageUrl: 'https://phinemo.com/wp-content/uploads/2018/01/13398713_600009410168440_2015330744_n.jpg',
      date: 'July 16, 2023',
      title: 'Mie Aceh Simpang Lima',
      link: '#',
      location:'Jl. Peuniti, Kec. Baiturrahman, Kota Banda Aceh, Aceh 23127'
    },
    {
      imageUrl: 'https://gudegyudjum.com/storage/app/public/img/home/card___gudeg-yu-djum-jogja-kendil-kuliner-khas-jogja__63a0815050e02__80.jpg',
      date: 'July 16, 2023',
      title: 'Gudeg Yu Djum Wijilan',
      link: 'https://gudegyudjum.com/',
      location: 'Jl. Wijilan No.31, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55131'
    },
    {
      imageUrl: 'https://paxelmarket.co/wp-content/uploads/2022/08/cropped-SAVE_20211212_211453.jpg',
      date: 'July 16, 2023',
      title: 'Surabi Cihapit Bandung',
      link: 'https://surabicihapit.com/',
      location: 'Jl. Ir. H. Juanda No. 374, Dago Atas, Bandung'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WWuuMJyYY7GDaBqPczJm5H_xJTw0eF5kmA&usqp=CAU',
      date: 'July 16, 2023',
      title: 'Soto Betawi H. Maaruf Jakarta',
      link: 'https://www.instagram.com/sotohmaruf/' ,
      location: 'Jl. RP. Soeroso No. 36A (Gondangdia Lama), Cikini, Menteng, Jakarta Pusat '
    },
    {
      imageUrl: 'https://media-cdn.yummyadvisor.com/store/ecb9a665-3f16-4b67-8166-d50a93a56df2.jpg',
      date: 'July 16, 2023',
      title: 'Pisang Ijo Lasinrang Mks',
      link: 'https://www.instagram.com/pisangijolasinrang/',
      location: 'Jl. Lasinrang No.28, Mangkura, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan 90113'
    },
  ];

  const handleLoadMore = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex items-center mb-4">
        <h2 className="text-gray-900 font-bold  text-lg xl:text-xl md:text-lg sm:text-sm mr-2">Restaurant Recommendations For You</h2>
        <RiRestaurantLine className="text-xl" />
      </div>
      <div className="flex overflow-x-auto scrollbar">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-transparent border border-gray-300 rounded-lg p-2 mx-2 my-4 text-center flex flex-col justify-between h-30 w-40"
          >
            <div className="flex-grow">
              <h3 className="text-gray-900 text-base font-bold">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{card.date}</p>
              <div style={{ height: '150px' }}>
                <img src={card.imageUrl} alt="Card" className="w-full h-full object-cover mb-2" />
              </div>
              <p className="text-black font-semibold text-sm mb-2">Location: {card.location}</p>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg" onClick={() => handleLoadMore(card.link)}>
              Load More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;







