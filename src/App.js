import React from 'react';
import LandingPage from './components/LandingPage';
import { FoodProvider } from './context/FoodContext';
import Header from './components/Header';

const App = () => {
  return (
    <FoodProvider>
      <Header/>
      <div className="flex items-center justify-center min-h-screen">
        <LandingPage />
      </div>
    </FoodProvider>
  );
};

export default App;
