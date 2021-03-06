import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import SummaryForm from 'ui/organism/SummaryForm/SummaryForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useOrders, usePostOrder } from 'hooks/useOrdersData';
import OrderFormData from 'shared/types/Order';
import AppRoute from 'routing/AppRoutes.enum';
import Navigator from 'ui/organism/Navigator/Navigator';

const Summary = () => {
  const { formatOrders } = useOrders();
  const orders = formatOrders();

  const { mutate, isError, isSuccess } = usePostOrder();

  const handleSubmition = (order: OrderFormData) => {
    mutate({ order: orders, ...order });
  };

  if (!orders.length) {
    return <Navigator to={AppRoute.Home} />;
  }

  if (isSuccess) {
    return <Navigator to={AppRoute.SummarySuccess} />;
  }

  if (isError) {
    return <Navigator to={AppRoute.SummaryError} />;
  }

  return (
    <Wrapper>
      <Container className='py-4'>
        <Row>
          <SummaryForm handleSubmition={handleSubmition} />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Summary;
