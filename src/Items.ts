import burgerImg from './assets/hamburger.jpeg'
import friesImg from './assets/fries.jpeg'
import colaImg from './assets/cola.jpeg'
import teaImg from './assets/tea.jpeg'
import coffeeImg from './assets/coffee.jpeg'
import bucketImg from './assets/bucket.jpeg'

import {Items} from './types.ts';

export const ITEMS: Items[] = [
  {name: 'Hamburger', price: 150, image: burgerImg},
  {name: 'Fries', price: 90, image: friesImg},
  {name: 'Coca Cola', price: 75, image: colaImg},
  {name: 'Tea', price: 35, image: teaImg},
  {name: 'Coffee', price: 50, image: coffeeImg},
  {name: 'Chicken Bucket', price: 220, image: bucketImg},
]