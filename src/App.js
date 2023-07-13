import React from 'react';
import LandingPage from './components/LandingPage';
import { FoodProvider } from './context/FoodContext';
import Header from './components/Header';
import { GiFoodTruck } from 'react-icons/gi';
import Slider from './components/Slidder';

const App = () => {
  return (
    <FoodProvider>
      <Header />
      <div className="mb-6">
        <Slider />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <LandingPage />
        <div className="fixed bottom-4 right-4">
          <button className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center animate-bounce text-sm">
            <GiFoodTruck className="ml-2" />
            Let's Eat
          </button>
        </div>
      </div>
    </FoodProvider>
  );
};

export default App;


