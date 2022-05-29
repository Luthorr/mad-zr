import CartItem from 'shared/types/Cart';

type OrderItemProps = CartItem & {
  handleBookDeletion: (id: number) => void;
};

export default OrderItemProps;
