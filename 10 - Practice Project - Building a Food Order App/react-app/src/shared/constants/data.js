import { nanoid } from 'nanoid';

export const DUMMY_MEALS = [
  {
    id: nanoid(),
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: nanoid(),
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: nanoid(),
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: nanoid(),
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
