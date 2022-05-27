import { Book } from 'shared/types/Book';

type BookCardProps = Book & {
  handleClick: (book: Book) => void;
};

export default BookCardProps;
