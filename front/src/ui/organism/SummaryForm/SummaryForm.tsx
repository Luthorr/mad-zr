import { Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormError from 'ui/atoms/FormError/FormError';
import SummaryFormProps from './SummaryForm.types';
import CustomButton from 'ui/atoms/Button/Button';
import ButtonVariants from 'constants/Button';

import styles from './SummaryForm.module.css';

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(4, '*Imię nie może być krótsze niż 4 znaki')
    .max(100, '*Imię nie może być dłuższe niż 100 znaków')
    .required('*Imię jest wymagane'),
  last_name: Yup.string()
    .min(5, '*Nazwisko nie może być krótsze niż 5 znaki')
    .max(100, '*Nazwisko nie może być dłuższe niż 100 znaków')
    .required('*Nazwisko jest wymagane'),
  city: Yup.string()
    .min(2, '*Nazwa miejscowości nie może być krótsza niż 2 znaki')
    .max(100, '*Nazwa miejscowości nie może być dłuższa niż 100 znaków')
    .required('*Nazwa miejscowości jest wymagana'),
  zip_code: Yup.string()
    .length(6, 'Kod pocztowy musi mieć dokładnie 6 znaków')
    .matches(
      /^[0-9]{2}(?:-[0-9]{3})?$/,
      'Kod pocztowy może składać się wyłacznie z cyfr'
    )
    .required('*Kod pocztowy jest wymagany'),
});

const SummaryForm = ({ handleSubmition }: SummaryFormProps) => {
  return (
    <>
      <h4 className='text-center py-2'>Uzupełnij dane</h4>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          city: '',
          zip_code: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmition(values);
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
          <Form onSubmit={handleSubmit} className={styles.form}>
            <Row>
              <Form.Group
                as={Col}
                xsm={12}
                sm={6}
                controlId='formFirstName'
                className={styles.formGroup}
              >
                <Form.Label>Imię</Form.Label>
                <Form.Control
                  name='first_name'
                  type='text'
                  placeholder='Wpisz imię'
                  value={values.first_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.first_name && errors.first_name && (
                  <FormError message={errors.first_name} />
                )}
              </Form.Group>

              <Form.Group
                as={Col}
                controlId='formLastName'
                className={styles.formGroup}
              >
                <Form.Label>Nazwisko</Form.Label>
                <Form.Control
                  name='last_name'
                  type='text'
                  placeholder='Wpisz nazwisko'
                  value={values.last_name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.last_name && errors.last_name && (
                  <FormError message={errors.last_name} />
                )}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                xsm={12}
                sm={6}
                controlId='formCity'
                className={styles.formGroup}
              >
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

              <Form.Group
                as={Col}
                controlId='formZip'
                className={styles.formGroup}
              >
                <Form.Label>Kod pocztowy</Form.Label>
                <Form.Control
                  name='zip_code'
                  type='text'
                  placeholder='Wpisz miejscowość'
                  value={values.zip_code}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.zip_code && errors.zip_code && (
                  <FormError message={errors.zip_code} />
                )}
              </Form.Group>
            </Row>
            <div className='d-flex justify-content-center py-3'>
              <CustomButton variant={ButtonVariants.Primary} type='submit'>
                ZAMAWIAM I PŁACĘ
              </CustomButton>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SummaryForm;
