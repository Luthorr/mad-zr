import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from 'ui/atoms/Logo/Logo';
import classnames from 'classnames';
import StyledLink from 'ui/atoms/StyledLink/StyledLink';
import AppRoute from 'routing/AppRoutes.enum';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header>
      <Container>
        <Navbar variant='dark' expand='lg' className={styles.navbar}>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className={classnames(
                'ms-lg-auto me-5',
                styles.navbarLinkContainer,
                styles['nav-link']
              )}
              navbarScroll
            >
              <div className={styles.linkContainer}>
                <StyledLink destination={AppRoute.Cart}>Koszyk</StyledLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Navigation;
