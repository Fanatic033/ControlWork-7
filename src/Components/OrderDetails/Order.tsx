import {Items} from '../../types.ts';
import React from 'react';

interface IOrderDetails {
  items: Items[];
}

const Order: React.FC<IOrderDetails> = ({items}) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={'order-details'}>
          <strong>{item.name}</strong>
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
};

export default Order;