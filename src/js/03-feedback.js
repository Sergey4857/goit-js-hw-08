import _throttle from 'lodash.throttle';

const refs = {
  inputEl: document.querySelector('input[name="email"]'),
  textArea: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', _throttle(onInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

populateContent();

function onInputChange(event) {
  formData.email = refs.inputEl.value;
  formData.message = refs.textArea.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateContent() {
  const localStorageValue = localStorage.getItem(STORAGE_KEY);
  if (localStorageValue) {
    const parsedValue = JSON.parse(localStorageValue);

    refs.textArea.value = parsedValue.message;
    refs.inputEl.value = parsedValue.email;
  }
}

function onFormSubmit(evt) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(formData);
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
