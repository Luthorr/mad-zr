import CartItem from 'shared/types/Cart';

type OrderListProps = {
  cart: CartItem[];
  handleBookDeletion: (id: number) => void;
};

export default OrderListProps;
