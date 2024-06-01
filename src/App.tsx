import FoodBtn from './Components/FoodBtn/FoodBtn.tsx';
import {useState} from 'react';
import {Items} from './types.ts';
import {ITEMS} from './Items.ts';
import './Components/FoodBtn/FoodBtn.css'

const App = () => {
  const [items, setItems] = useState<Items[]>([]);
  return (
    <>
      <div className="add-container">
        <h2>Add Items</h2>
        <div className="btn-container">
          {ITEMS.map((item, index) => (
            <FoodBtn key={index} item={item}/>
          ))}
        </div>
      </div>
    </>
  )
};

export default App
