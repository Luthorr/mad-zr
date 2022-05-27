import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import OrderItem from 'ui/molecules/OrderItem/OrderItem';

import cartSvg from 'ui/assets/icons/cart.svg';
import { Image } from 'react-bootstrap';

const OrderList = () => {
  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <div className='bg-white py-4 px-4 rounded d-flex flex-column gap-3'>
      {cart.length ? (
        cart.map(
          ({ id, cover_url, title, author, pages, price, currency, qty }) => (
            <OrderItem
              key={id}
              id={id}
              cover_url={cover_url}
              title={title}
              author={author}
              pages={pages}
              price={price}
              currency={currency}
              qty={qty}
            />
          )
        )
      ) : (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h4 className='text-center pt-3'>Brak produktów w koszyku.</h4>
          <h6 className='text-center pb-3'>Dodaj produkt, by go zobaczyć.</h6>
          <Image src={cartSvg} width={150} />
        </div>
      )}
    </div>
  );
};

export default OrderList;
