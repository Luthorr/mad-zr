import { postOrder } from 'api/orders/actions';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const usePostOrder = () => useMutation(postOrder);

export const useOrders = () => {
  const cart = useSelector((state: RootState) => state.cart.value);

  const getOrdersPrice = () =>
    cart.reduce((acc, value) => (acc += value.qty * value.price), 0);

  const formatOrders = () =>
    cart.map((book) => ({ id: book.id, quantity: book.qty }));

  return { getOrdersPrice, formatOrders };
};
