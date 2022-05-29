import { useEffect } from 'react';
import OperationStatus from 'ui/organism/OperationStatus/OperationStatus';
import { useDispatch } from 'react-redux';
import { clearCart } from 'features/cartSlice';
import successImage from 'ui/assets/images/success.svg';

const SummarySuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <OperationStatus
      text='Twoje zamówienie zostało złożone pomyślnie. Dziękujemy!'
      imageSrc={successImage}
    />
  );
};

export default SummarySuccess;
