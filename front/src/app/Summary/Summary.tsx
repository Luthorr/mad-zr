import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import SummaryForm from 'ui/organism/SummaryForm/SummaryForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Summary = () => {
  return (
    <Wrapper>
      <Container className='py-4'>
        <Row>
          <SummaryForm />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Summary;
