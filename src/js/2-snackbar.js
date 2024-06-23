import { errorFlagSnackbar, successFlagSnackbar } from '../modules/iziToast';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const input = document.querySelector('input[name="delay"]');
  const state = document.querySelector('input[name="state"]:checked');

  const toast = new Promise((resolve, reject) => {
    const delay = input.value;

    if (state.value === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    }
    if (state.value === 'rejected') {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  toast
    .then(delay => {
      successFlagSnackbar(delay);
    })
    .catch(delay => {
      errorFlagSnackbar(delay);
    })
    .finally(() => {
      input.value = '';
      state.checked = false;
    });
});
