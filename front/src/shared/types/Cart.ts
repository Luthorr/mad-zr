import { Book } from './Book';

type CartItem = Book & {
  qty: number;
};

export default CartItem;
