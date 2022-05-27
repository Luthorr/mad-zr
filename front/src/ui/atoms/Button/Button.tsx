import Button from 'react-bootstrap/Button';
import classnames from 'classnames';
import ButtonVariants from 'constants/Button';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

const CustomButton = ({
  type = 'button',
  children,
  variant,
  disabled = false,
  handleClick,
}: ButtonProps) => (
  <Button
    type={type}
    className={classnames('px-4 py-2', styles.button, {
      [styles.piPrimary]: variant === ButtonVariants.Primary,
    })}
    disabled={disabled}
    onClick={handleClick}
  >
    {children}
  </Button>
);

export default CustomButton;
