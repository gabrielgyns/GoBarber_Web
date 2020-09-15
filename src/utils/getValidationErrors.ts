import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(errorItem => {
    validationErrors[errorItem.path] = errorItem.message;
  });

  return validationErrors;
}
