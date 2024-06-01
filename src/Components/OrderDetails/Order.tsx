import {Items} from '../../types.ts';
import React from 'react';

interface IOrderDetails {
  items: Items[];
  OnRemove: (id: string) => void;
}

const Order: React.FC<IOrderDetails> = ({items, OnRemove}) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={'order-details'}>
          <strong>{item.name}</strong>
          <p>{item.price}</p>
          <button onClick={() => OnRemove(item.id)}>X</button>
        </div>
      ))}
    </>
  );
};

export default Order;