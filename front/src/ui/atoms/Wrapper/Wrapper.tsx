import Container from 'react-bootstrap/Container';
import WrapperProps from './Wrapper.types';
import styles from './Wrapper.module.css';

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Container fluid className={styles.grayBackground}>
      {children}
    </Container>
  );
};

export default Wrapper;
