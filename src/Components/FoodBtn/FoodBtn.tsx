import {Items} from '../../types.ts';
import React from 'react';

interface FoodBtnProps {
  item: Items;
}

const FoodBtn:React.FC<FoodBtnProps> = ({item}) => {
  return (
    <div>
<button>
  <img src={item.image} alt={item.name}  className={'img-btn'}/>
  <p>{item.name}</p>
  <p>Price: {item.price}</p>
</button>
    </div>
  );
};

export default FoodBtn;