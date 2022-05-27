import api from 'api/api';

export const postOrder = async () => {
  await api.post('/order');
};
