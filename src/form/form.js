import './form.css';

export default function createSignupForm(inputElements) {
  const form = document.createElement('form');
  form.classList.add('standard-form');
  inputElements.forEach((inputElement) => {
    form.appendChild(inputElement);
  });
  const submitButton = document.createElement('button');
  submitButton.classList.add('standard-form-submit-button');
  submitButton.type = 'submit';
  submitButton.innerText = 'Submit';
  form.appendChild(submitButton);
  return form;
}

export function createRowInputElement(data) {
  const formRow = document.createElement('div');
  formRow.classList.add('form-row');

  const label = document.createElement('label');
  label.innerText = data.labelText;
  label.for = data.id;
  formRow.appendChild(label);

  const input = document.createElement('input');
  input.type = data.type;
  input.name = data.name ? data.name : data.id;
  input.id = data.id;
  input.placeholder = data.placeholder ? data.placeholder : '';
  input.required = data.required;
  formRow.appendChild(input);

  return formRow;
}
