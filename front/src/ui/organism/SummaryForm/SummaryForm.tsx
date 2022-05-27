import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormError from 'ui/atoms/FormError/FormError';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, '*Imię nie może być krótsze niż 2 znaki')
    .max(100, '*Imię nie może być dłuższe niż 100 znaków')
    .required('*Imię jest wymagane'),
  lastName: Yup.string()
    .min(2, '*Nazwisko nie może być krótsze niż 2 znaki')
    .max(100, '*Nazwisko nie może być dłuższe niż 100 znaków')
    .required('*Nazwisko jest wymagane'),
  city: Yup.string()
    .min(2, '*Nazwa miejscowości nie może być krótsza niż 2 znaki')
    .max(100, '*Nazwa miejscowości nie może być dłuższa niż 100 znaków')
    .required('*Nazwa miejscowości jest wymagane'),
  zip: Yup.string()
    .length(6, 'Kod pocztowy musi mieć dokładnie 6 znaków')
    .matches(
      /^[0-9]{2}(?:-[0-9]{3})?$/,
      'Kod pocztowy może składać się wyłacznie z cyfr'
    )
    .required('*Kod pocztowy jest wymagany'),
});

const SummaryForm = () => {
  return (
    <>
      <h4 className='text-center py-2'>Uzupełnij dane</h4>
      <Formik
        initialValues={{ firstName: '', lastName: '', city: '', zip: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} xsm={12} sm={6} controlId='formFirstName'>
                <Form.Label>Imię</Form.Label>
                <Form.Control
                  name='firstName'
                  type='text'
                  placeholder='Wpisz imię'
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.firstName && errors.firstName && (
                  <FormError message={errors.firstName} />
                )}
              </Form.Group>

              <Form.Group as={Col} controlId='formLastName'>
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control
                  name='lastName'
                  type='text'
                  placeholder='Wpisz nazwisko'
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.lastName && errors.lastName && (
                  <FormError message={errors.lastName} />
                )}
              </Form.Group>
            </Row>
            <Row className='py-3'>
              <Form.Group as={Col} xsm={12} sm={6} controlId='formCity'>
                <Form.Label>Miejscowość</Form.Label>
                <Form.Control
                  name='city'
                  type='text'
                  placeholder='Wpisz miejscowość'
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.city && errors.city && (
                  <FormError message={errors.city} />
                )}
              </Form.Group>

              <Form.Group as={Col} controlId='formZip'>
                <Form.Label>Kod pocztowy</Form.Label>
                <Form.Control
                  name='zip'
                  type='text'
                  placeholder='Wpisz miejscowość'
                  value={values.zip}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.zip && errors.zip && (
                  <FormError message={errors.zip} />
                )}
              </Form.Group>
            </Row>
            <Button variant='primary' type='submit'>
              ZAMAWIAM I PŁACĘ
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SummaryForm;
