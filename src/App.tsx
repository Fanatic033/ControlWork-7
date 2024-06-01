import FoodBtn from './Components/FoodBtn/FoodBtn.tsx';
import {useState} from 'react';
import {Items} from './types.ts';
import {ITEMS} from './Items.ts';
import './Components/FoodBtn/FoodBtn.css';
import Order from './Components/OrderDetails/Order.tsx';
import './Components/OrderDetails/Order.css';
import './App.css';

const App = () => {
  const [items, setItems] = useState<Items[]>([]);

  const AddId = (item: Items): Items => ({
    ...item,
    id: Math.floor(Math.random() * 1000).toString(16),
  });

  const AddItem = (item: Items) => {
    setItems(prevItems => {
      const currentItem = prevItems.find(i => i.name === item.name);
      if (currentItem) {
        return prevItems.map(i =>
          i.name === item.name ? {...i, quantity: (i.quantity) + 1} : i
        );
      } else {
        return [...prevItems, {...AddId(item), quantity: 1}];
      }
    });
  };
  const RemoveId = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <>
      <div className="app-container">
        <div className="add-container">
          <h2>Add Items</h2>
          <div className="btn-container">
            {ITEMS.map((item) => (
              <FoodBtn
                key={item.id}
                item={item}
                onAdd={() => AddItem(item)}
              />
            ))}
          </div>
        </div>
        <div className={'order-container'}>
          <Order items={items} OnRemove={RemoveId} Total={getTotal()}/>
        </div>
      </div>
    </>
  );
};

export default App;
