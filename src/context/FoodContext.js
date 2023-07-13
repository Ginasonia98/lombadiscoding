import React, { createContext, useState } from 'react';
import foods from '../data/foods';

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foodList, setFoodList] = useState(foods);

  return (
    <FoodContext.Provider value={{ foodList }}>
      {children}
    </FoodContext.Provider>
  );
};
