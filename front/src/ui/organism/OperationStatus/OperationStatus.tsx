import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Wrapper from 'ui/atoms/Wrapper/Wrapper';
import OperationStatusProps from './OperationStatus.types';
import LinkButton from 'ui/atoms/LinkButton/LinkButton';

import classnames from 'classnames';

import styles from './OperationStatus.module.css';
import AppRoute from 'routing/AppRoutes.enum';

const OperationStatus = ({ text, imageSrc }: OperationStatusProps) => {
  return (
    <Wrapper>
      <Container className='py-5'>
        <Row className='d-flex flex-column align-items-center justify-content-center'>
          <h2 className='text-center'>{text}</h2>
          {imageSrc && (
            <Image
              className={classnames('py-3', styles.image)}
              src={imageSrc}
            />
          )}
          <LinkButton to={AppRoute.Home} text={'Przejdź do strony głównej'} />
        </Row>
      </Container>
    </Wrapper>
  );
};

export default OperationStatus;
