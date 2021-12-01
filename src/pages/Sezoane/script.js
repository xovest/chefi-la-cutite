import Select from './select.js';

const selectElements = document.querySelectorAll('[data-custom]');

async function doit() {
  await selectElements.forEach(selectElement => {
    new Select(selectElement);
  })
}

doit();
