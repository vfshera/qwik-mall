interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ICartItem {
  item: Product;
  quantity: number;
}
interface GlobalState {
  cart: ICartItem[];
}
