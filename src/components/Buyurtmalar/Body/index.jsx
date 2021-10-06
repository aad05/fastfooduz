import React from 'react';
import MenuH from '../menuH';
import MenuV from '../menuV';

export const Body = ({ active }) => {
  return <div>{active ? <MenuV /> : <MenuH />}</div>;
};

export default Body;
