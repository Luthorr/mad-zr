import api from 'api/api';
import { BooksPayload } from './types';

export const getBooks = async (page = 1) => {
  const { data } = await api.get(`/books?page=${page}`);
  return data as BooksPayload;
};
