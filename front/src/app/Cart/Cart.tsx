import classnames from 'classnames';
import ButtonVariants from 'constants/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomButton from 'ui/atoms/Button/Button';
import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import OrderList from 'ui/organism/OrderList/OrderList';

import styles from './Cart.module.css';

const Cart = () => {
  return (
    <Wrapper>
      <Container className='py-4'>
        <Row className='py-3 pb-2'>
          <h4 className='fw-bold'>Twoje zamówienie</h4>
        </Row>
        <Row>
          <OrderList />
        </Row>
        <Row>
          <div className={classnames('px-0', styles.buttonContainer)}>
            <CustomButton variant={ButtonVariants.Primary}>DALEJ</CustomButton>
          </div>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Cart;
