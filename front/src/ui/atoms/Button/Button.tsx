import Button from 'react-bootstrap/Button';
import classnames from 'classnames';
import ButtonVariants from 'constants/Button';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

const CustomButton = ({ children, variant, handleClick }: ButtonProps) => (
  <Button
    type='button'
    className={classnames('px-4 py-2', styles.button, {
      [styles.piPrimary]: variant === ButtonVariants.Primary,
    })}
    onClick={handleClick}
  >
    {children}
  </Button>
);

export default CustomButton;
