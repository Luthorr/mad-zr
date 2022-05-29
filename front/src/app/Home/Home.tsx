import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AppRoute from 'routing/AppRoutes.enum';
import LinkButton from 'ui/atoms/LinkButton/LinkButton';
import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import BooksList from 'ui/organism/BooksList/BooksList';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <div className='py-3 d-flex justify-content-end'>
            <LinkButton to={AppRoute.Cart} text='Koszyk' />
          </div>
        </Row>
        <Row className='pb-3'>
          <BooksList />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Home;
