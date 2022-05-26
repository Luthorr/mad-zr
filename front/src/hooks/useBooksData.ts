import { getBooks } from 'api/books/actions';
import { useQuery } from 'react-query';

export const useBooksData = () => useQuery('books', getBooks);
