import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(4, '*Imię nie może być krótsze niż 4 znaki')
    .max(50, '*Imię nie może być dłuższe niż 50 znaków')
    .required('*Imię jest wymagane'),
  last_name: Yup.string()
    .min(5, '*Nazwisko nie może być krótsze niż 5 znaki')
    .max(50, '*Nazwisko nie może być dłuższe niż 50 znaków')
    .required('*Nazwisko jest wymagane'),
  city: Yup.string().required('*Nazwa miejscowości jest wymagana'),
  zip_code: Yup.string()
    .length(6, 'Kod pocztowy musi mieć dokładnie 6 znaków')
    .matches(
      /\d{2}-\d{3}/,
      'Kod pocztowy może składać się wyłacznie z cyfr i być w formacie __-___'
    )
    .required('*Kod pocztowy jest wymagany'),
});
