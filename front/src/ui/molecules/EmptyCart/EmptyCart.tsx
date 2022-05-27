import { Image } from 'react-bootstrap';
import cartSvg from 'ui/assets/icons/cart.svg';

const EmptyCart = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h4 className='text-center pt-3'>Brak produktów w koszyku.</h4>
      <h6 className='text-center pb-3'>Dodaj produkt, by go zobaczyć.</h6>
      <Image src={cartSvg} width={150} />
    </div>
  );
};

export default EmptyCart;
