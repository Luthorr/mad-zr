import OrderItem from 'ui/molecules/OrderItem/OrderItem';

import OrderListProps from './OrderList.types';

const OrderList = ({ cart }: OrderListProps) => {
  return (
    <div className='bg-white py-4 px-4 rounded d-flex flex-column gap-3'>
      {cart.map(
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
      )}
    </div>
  );
};

export default OrderList;
