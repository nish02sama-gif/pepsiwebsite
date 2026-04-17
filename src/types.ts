export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: string;
  tag?: string;
  rating: number;
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
}
