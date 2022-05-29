import classnames from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AppRoute from 'routing/AppRoutes.enum';
import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import OrderList from 'ui/organism/OrderList/OrderList';
import styles from './Cart.module.css';
import EmptyCart from 'ui/molecules/EmptyCart/EmptyCart';
import LinkButton from 'ui/atoms/LinkButton/LinkButton';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <Wrapper>
      <Container className='py-4'>
        {cart.length ? (
          <>
            <Row className='py-3 pb-2'>
              <h4 className='fw-bold'>Twoje zamówienie</h4>
            </Row>
            <Row>
              <OrderList cart={cart} />
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
