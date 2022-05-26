import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import OrderList from 'ui/organism/OrderList/OrderList';

const Cart = () => {
  return (
    <Wrapper>
      <Container className='py-4'>
        <Row>
          <h4 className='fw-bold'>Zamówienie</h4>
        </Row>
        <Row>
          <OrderList />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Cart;
