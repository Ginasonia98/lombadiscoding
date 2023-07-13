import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  const images = [
    'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/header.jpg',
  ];

  return (
    <Carousel showArrows={false} infiniteLoop={true} showThumbs={false} showStatus={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;






