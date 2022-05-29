import { getBooks } from 'api/books/actions';
import { useQuery } from 'react-query';

export const useBooksData = (page: number) =>
  useQuery(['books', page], () => getBooks(page), { keepPreviousData: true });
