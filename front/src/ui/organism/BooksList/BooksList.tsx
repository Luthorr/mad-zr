import { useBooksData } from 'hooks/useBooksData';
import LoadingProgress from 'ui/atoms/LoadingProgress/LoadingProgress';
import LoadingError from 'ui/atoms/LoadingError/LoadingError';
import BookCard from 'ui/molecules/BookCard/BookCard';

const BooksList = () => {
  const { data, isLoading, isError, isIdle } = useBooksData();

  if (isLoading || isIdle) {
    return <LoadingProgress />;
  }

  if (isError) {
    return <LoadingError />;
  }

  console.log(data.data);

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
          />
        )
      )}
    </div>
  );
};

export default BooksList;
