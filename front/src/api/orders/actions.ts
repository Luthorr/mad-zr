import api from 'api/api';
import { OrderPost } from './types';

export const postOrder = async (order: OrderPost) => {
  await api.post('/order', order);
};
