import { postOrder } from 'api/orders/actions';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const useOrdersFormatter = () => {
  const cart = useSelector((state: RootState) => state.cart.value);

  return cart.map((book) => ({ id: book.id, quantity: book.qty }));
};

export const usePostOrder = () => useMutation(postOrder);
