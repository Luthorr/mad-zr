import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import BooksList from 'ui/organism/BooksList/BooksList';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Row className='py-5'>
          <BooksList />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Home;
