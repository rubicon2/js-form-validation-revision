import createSignupForm, { createRowInputElement } from './form/form';
import './style.css';

const signupForm = createSignupForm('Sign up', [
  createRowInputElement({
    type: 'email',
    labelText: 'Email',
    id: 'email',
    placeholder: 'freddo@freddo.com',
    required: true,
  }),
  createRowInputElement({
    type: 'text',
    labelText: 'Name',
    id: 'name',
    placeholder: 'Freddo',
    required: true,
  }),
  createRowInputElement({
    type: 'password',
    labelText: 'Password',
    id: 'password',
    required: true,
  }),
  createRowInputElement({
    type: 'password',
    labelText: 'Confirm password',
    id: 'password-confirm',
    required: true,
  }),
]);

document.body.appendChild(signupForm);
