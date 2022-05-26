import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import ButtonVariants from 'constants/Button';
import error404 from 'ui/assets/images/error404.svg';
import CustomButton from 'ui/atoms/Button/Button';
import AppRoute from 'routing/AppRoutes.enum';

const LoadingError = () => (
  <div className='d-flex flex-column justify-content-center align-items-center py-5'>
    <Image src={error404} fluid />
    <div className='pt-5'>
      <Link to={AppRoute.Home}>
        <CustomButton variant={ButtonVariants.Primary}>Powrót</CustomButton>
      </Link>
    </div>
  </div>
);

export default LoadingError;
