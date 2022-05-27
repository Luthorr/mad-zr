import { useBooksData } from 'hooks/useBooksData';
import LoadingProgress from 'ui/atoms/LoadingProgress/LoadingProgress';
import LoadingError from 'ui/atoms/LoadingError/LoadingError';
import BookCard from 'ui/molecules/BookCard/BookCard';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cartSlice';
import { Book } from 'shared/types/Book';

const BooksList = () => {
  const { data, isLoading, isError, isIdle } = useBooksData();
  const dispatch = useDispatch();

  if (isLoading || isIdle) {
    return <LoadingProgress />;
  }

  if (isError) {
    return <LoadingError />;
  }

  const handleAddToCart = (item: Book) => {
    dispatch(addToCart(item));
  };

  return (
    <div className='d-flex flex-wrap gap-5'>
      {data.data.map(
        ({ id, cover_url, title, author, pages, price, currency }) => (
          <BookCard
            key={id}
            id={id}
            cover_url={cover_url}
            title={title}
            author={author}
            pages={pages}
            price={price}
            currency={currency}
            handleClick={handleAddToCart}
          />
        )
      )}
    </div>
  );
};

export default BooksList;
