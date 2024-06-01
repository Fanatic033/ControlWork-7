import {Items} from '../../types.ts';
import React from 'react';

interface FoodBtnProps {
  item: Items;
  onAdd: () => void;
}

const FoodBtn:React.FC<FoodBtnProps> = ({item, onAdd}) => {
  return (
    <div className={'btn-item'}>
<button onClick={onAdd}>
  <img src={item.image} alt={item.name}  className={'img-btn'}/>
  <div className={'item-info'}>
  <strong>{item.name}</strong>
  <p>Price: {item.price} KGS</p>
  </div>
</button>
    </div>
  );
};

export default FoodBtn;