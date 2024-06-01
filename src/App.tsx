import FoodBtn from './Components/FoodBtn/FoodBtn.tsx';
import {useState} from 'react';
import {Items} from './types.ts';
import {ITEMS} from './Items.ts';
import './Components/FoodBtn/FoodBtn.css'
import Order from './Components/OrderDetails/Order.tsx';
import './Components/OrderDetails/Order.css'

const App = () => {
  const [items, setItems] = useState<Items[]>([]);

  const AddId = (item: Items):Items => ({
    ...item,
    id: Math.floor(Math.random() * 1000).toString(16),
  })
  const RemoveId = (id:string) => {
   setItems(items.filter((item) => item.id !== id))
  }
  return (
    <>
      <div className="add-container">
        <h2>Add Items</h2>
        <div className="btn-container">
          {ITEMS.map((item) => (
            <FoodBtn
              key={item.id}
              item={item}
              onAdd={() => setItems([...items, AddId(item)])}
            />
          ))}
        </div>
      </div>
      <div>
        <Order items={items} OnRemove={RemoveId}/>
      </div>
    </>
  )
};

export default App
