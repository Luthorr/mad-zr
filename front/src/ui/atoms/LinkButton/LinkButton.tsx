import CustomButton from 'ui/atoms/Button/Button';
import ButtonVariants from 'constants/Button';
import { Link } from 'react-router-dom';
import LinkButtonProps from './LinkButton.types';

const LinkButton = ({ to, text }: LinkButtonProps) => {
  return (
    <Link to={to} style={{ display: 'contents' }}>
      <CustomButton variant={ButtonVariants.Primary}>{text}</CustomButton>
    </Link>
  );
};

export default LinkButton;
