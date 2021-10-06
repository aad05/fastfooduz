import React, { createContext, useState, useContext } from 'react';
import { card } from '../../mock/card';

const BuyurtmalarContext = createContext();
export const Buyurtma = () => useContext(BuyurtmalarContext);

export const Buyurtmalar = ({ children }) => {
  const [data, setData] = useState(card);
  return (
    <BuyurtmalarContext.Provider value={[data, setData]}>
      {children}
    </BuyurtmalarContext.Provider>
  );
};

export default Buyurtmalar;
