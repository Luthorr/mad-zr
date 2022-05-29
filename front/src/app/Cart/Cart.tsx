import classnames from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AppRoute from 'routing/AppRoutes.enum';
import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import OrderList from 'ui/organism/OrderList/OrderList';
import EmptyCart from 'ui/molecules/EmptyCart/EmptyCart';
import LinkButton from 'ui/atoms/LinkButton/LinkButton';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'features/cartSlice';

import styles from './Cart.module.css';
import { useOrders } from 'hooks/useOrdersData';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const { getOrdersPrice } = useOrders();
  const dispatch = useDispatch();

  const handleBookDeletion = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = getOrdersPrice();

  return (
    <Wrapper>
      <Container className='py-4'>
        {cart.length ? (
          <>
            <Row className='py-3 pb-2'>
              <h4 className='fw-bold'>Twoje zamówienie</h4>
            </Row>
            <Row>
              <OrderList cart={cart} handleBookDeletion={handleBookDeletion} />
            </Row>
            <Row>
              <h5 className='text-end fw-bold py-2'>
                Suma: {totalPrice} {cart[0]?.currency}
              </h5>
            </Row>
            <Row>
              <div className={classnames('px-0', styles.buttonContainer)}>
                <LinkButton to={AppRoute.Summary} text='DALEJ' />
              </div>
            </Row>
          </>
        ) : (
          <Row>
            <EmptyCart />
          </Row>
        )}
      </Container>
    </Wrapper>
  );
};

export default Cart;
