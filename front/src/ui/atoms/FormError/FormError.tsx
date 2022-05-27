import FormErrorProps from './FormError.types';
import styles from './FormError.module.css';

const FormError = ({ message }: FormErrorProps) => {
  return <span className={styles.error}>{message}</span>;
};

export default FormError;
