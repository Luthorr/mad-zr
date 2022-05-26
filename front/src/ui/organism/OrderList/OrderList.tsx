import { Book } from 'shared/types/Book';
import OrderItem from 'ui/molecules/OrderItem/OrderItem';

const OrderList = () => {
  const cart: Book[] = [
    {
      id: 457,
      title: 'Matematyka 1. Podręcznik. Zakres podstawowy',
      author: 'M. Karpiński, M. Dobrowolska, M. Braun, J. Lech',
      cover_url: 'http://localhost:3001/static/cover/book/457.jpg',
      pages: 280,
      price: 3200,
      currency: 'PLN',
    },
    {
      id: 458,
      title: 'Matematyka 1. Podręcznik. Zakres rozszerzony',
      author: 'M. Karpiński, M. Dobrowolska, M. Braun, J. Lech',
      cover_url: 'http://localhost:3001/static/cover/book/458.jpg',
      pages: 300,
      price: 3300,
      currency: 'PLN',
    },
    {
      id: 1246,
      title: 'Matematyka z plusem 7. Podręcznik',
      author: 'praca zbiorowa pod redakcją M. Dobrowolskiej',
      cover_url: 'http://localhost:3001/static/cover/book/1246.jpg',
      pages: 336,
      price: 3420,
      currency: 'PLN',
    },
  ];

  return (
    <div className='bg-white py-4 px-4 rounded d-flex flex-column gap-3'>
      {cart.map(({ id, cover_url, title, author, pages, price, currency }) => (
        <OrderItem
          key={id}
          id={id}
          cover_url={cover_url}
          title={title}
          author={author}
          pages={pages}
          price={price}
          currency={currency}
        />
      ))}
    </div>
  );
};

export default OrderList;
