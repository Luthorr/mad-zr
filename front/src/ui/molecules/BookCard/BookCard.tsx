import Card from 'react-bootstrap/Card';
import BookCardProps from './BookCard.types';

import styles from './BookCard.module.css';
import CustomButton from 'ui/atoms/Button/Button';
import ButtonVariants from 'constants/Button';

const BookCard = ({
  id,
  author,
  cover_url,
  currency,
  pages,
  price,
  title,
  handleClick,
}: BookCardProps) => {
  return (
    <Card className={styles.wrapper}>
      <Card.Img
        variant='top'
        src={cover_url}
        className={styles.image}
        alt={`Okładka książki ${title}`}
      />
      <Card.Body className={styles.content}>
        <div>
          <Card.Title className='fw-bold'>Tytuł książki</Card.Title>
          <Card.Subtitle className='fw-bold'>{author}</Card.Subtitle>
          <Card.Subtitle className='text-muted mt-2'>
            Stron: {pages}
          </Card.Subtitle>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <CustomButton
            variant={ButtonVariants.Primary}
            handleClick={() =>
              handleClick({
                id,
                author,
                cover_url,
                currency,
                pages,
                price,
                title,
              })
            }
          >
            DODAJ DO KOSZYKA
          </CustomButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
