import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'original',
    name: 'Pepsi Original',
    description: 'The iconic bold, refreshing cola.',
    price: 1.29,
    calories: '150 kcal',
    tag: 'Original',
    rating: 5,
    color: 'bg-pepsi-blue'
  },
  {
    id: 'max',
    name: 'Pepsi Max',
    description: 'Maximum taste, zero sugar.',
    price: 1.29,
    calories: '0 kcal',
    tag: 'Most Popular',
    rating: 5,
    color: 'bg-black'
  },
  {
    id: 'zero',
    name: 'Pepsi Zero Sugar',
    description: 'Unapologetic taste without the sugar.',
    price: 1.29,
    calories: '0 kcal',
    tag: 'Zero Sugar',
    rating: 4,
    color: 'bg-gray-900'
  },
  {
    id: 'mango',
    name: 'Pepsi Mango',
    description: 'Tropical mango splash meeting classic Pepsi.',
    price: 1.49,
    calories: '160 kcal',
    tag: 'New',
    rating: 4,
    color: 'bg-orange-500'
  },
  {
    id: 'lime',
    name: 'Pepsi Lime',
    description: 'Zesty lime twist for ultimate refreshment.',
    price: 1.49,
    calories: '150 kcal',
    tag: 'Zesty',
    rating: 4,
    color: 'bg-green-500'
  },
  {
    id: 'wild-cherry',
    name: 'Pepsi Wild Cherry',
    description: 'A burst of wild cherry flavor.',
    price: 1.49,
    calories: '160 kcal',
    tag: 'Fruity',
    rating: 5,
    color: 'bg-red-700'
  },
  {
    id: '1893',
    name: 'Pepsi 1893',
    description: 'Ginger-infused craft cola inspired by the original recipe.',
    price: 2.49,
    calories: '150 kcal',
    tag: 'Limited Edition',
    rating: 5,
    color: 'bg-amber-800'
  },
  {
    id: 'mini',
    name: 'Pepsi Mini',
    description: 'Little can, massive refreshment.',
    price: 0.99,
    calories: '100 kcal',
    tag: 'Classic',
    rating: 5,
    color: 'bg-pepsi-blue'
  }
];
