import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from 'ui/atoms/Logo/Logo';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header>
      <Container>
        <Navbar variant='light' expand='lg' className={styles.navbar}>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
        </Navbar>
      </Container>
    </header>
  );
};

export default Navigation;
