import api from 'api/api';
import { BooksPayload } from './types';

export const getBooks = async () => {
  const { data } = await api.get('/books');
  return data as BooksPayload;
};
