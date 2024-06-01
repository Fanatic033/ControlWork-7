import {Items} from '../../types.ts';
import React from 'react';

interface IOrderDetails {
  items: Items[];
  OnRemove: (id: string) => void;
  Total: number
}

const Order: React.FC<IOrderDetails> = ({items  , OnRemove,Total}) => {
  return (
    <div>
      <h2>Order Details</h2>
      {items.length === 0 ? (
        <p>Order is Empty</p>
      ) : (
        <ul>
          {items.map((item,quainity) => (
            <li key={item.id}>
              <div className="order-item">
                <div className="order-info">
                  <p>{item.name} {quainity}</p>
                  <p>Price: {item.price}</p>
                  <button onClick={() => OnRemove(item.id)} className={'order-btn'}>X</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <strong>Total: {Total}</strong>
    </div>
  );
};

export default Order;