import {Items} from '../../types.ts';
import React from 'react';

interface IOrderDetails {
  items: Items[];
  OnRemove: (id: string) => void;
}

const Order: React.FC<IOrderDetails> = ({items  , OnRemove}) => {
  return (
    <div>
      <h2>Order Details</h2>
      {items.length === 0 ? (
        <p>No items added</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div className="order-item">
                <div className="order-info">
                  <p>{item.name}</p>
                  <p>Price: {item.price}</p>
                  <button onClick={() => OnRemove(item.id)} className={'order-btn'}>X</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <strong>Total</strong>
    </div>
  );
};

export default Order;