import Image from 'react-bootstrap/Image';
import OrderItemProps from './OrderItem.types';
import classnames from 'classnames';

import styles from './OrderItem.module.css';

const OrderItem = ({
  id,
  author,
  cover_url,
  currency,
  pages,
  price,
  title,
  qty,
  handleBookDeletion,
}: OrderItemProps) => {
  return (
    <div className={classnames('my-2', styles.wrapper)}>
      <div className='d-flex'>
        <Image src={cover_url} width={75} className={styles.image} />
        <div className='d-flex flex-column ms-3'>
          <h5 className='fw-bold'>{title}</h5>
          <h6 className='text-muted'>{author}</h6>
          <h6 className='text-muted'>Stron: {pages}</h6>
          <button
            type='button'
            className={classnames('text-danger', styles.deleteButton)}
            onClick={() => handleBookDeletion(id)}
          >
            Usuń
          </button>
        </div>
        <div className='d-flex flex-column justify-content-center  ms-auto pe-2 pe-md-4'>
          <p>
            Ilość: <strong>{qty}</strong>
          </p>
          <p>
            Cena:{' '}
            <strong>
              {price * qty} {currency}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
