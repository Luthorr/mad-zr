import { useBooksData } from 'hooks/useBooksData';
import LoadingProgress from 'ui/atoms/LoadingProgress/LoadingProgress';
import LoadingError from 'ui/atoms/LoadingError/LoadingError';
import BookCard from 'ui/molecules/BookCard/BookCard';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/cartSlice';
import { Book } from 'shared/types/Book';
import { usePagination } from 'hooks/usePagination';
import CustomButton from 'ui/atoms/Button/Button';
import ButtonVariants from 'constants/Button';

const BooksList = () => {
  const { page, paginate } = usePagination();
  const { data, isLoading, isError, isIdle } = useBooksData(page);
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

  const totalPages = Math.ceil(
    data.metadata.total_records / data.metadata.records_per_page
  );

  return (
    <>
      {data.data.length ? (
        <>
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
          <div className='d-flex gap-3 pt-5 pb-3 justify-content-center'>
            <CustomButton
              variant={ButtonVariants.Primary}
              disabled={page === 1}
              handleClick={() => paginate(page - 1)}
            >
              POPRZEDNIA
            </CustomButton>
            <CustomButton
              variant={ButtonVariants.Primary}
              disabled={page >= totalPages}
              handleClick={() => paginate(page + 1)}
            >
              NASTĘPNA
            </CustomButton>
          </div>
        </>
      ) : (
        <h4 className='text-center pb-3'>Brak wyników do wyświetlenia.</h4>
      )}
    </>
  );
};

export default BooksList;
