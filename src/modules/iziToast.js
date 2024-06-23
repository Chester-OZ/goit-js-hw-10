import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const optionsFlags = {
  icon: '',
  messageColor: 'white',
  timeout: 2000,
  position: 'topRight',
  close: false,
  closeOnEscape: true,
  closeOnClick: true,
  displayMode: 'replace',
};

const errorFlag = () =>
  iziToast.error({
    title: 'Error',
    message: 'Please choose a date in the future',
    backgroundColor: '#CB1E1E',
    ...optionsFlags,
  });

const successFlag = () =>
  iziToast.success({
    title: 'Success',
    message: 'Countdown finished!',
    backgroundColor: '#1ECB75',
    ...optionsFlags,
  });

const errorFlagSnackbar = delay =>
  iziToast.error({
    message: `❌ Rejected promise in ${delay}ms`,
    backgroundColor: '#CB1E1E',
    ...optionsFlags,
  });

const successFlagSnackbar = delay =>
  iziToast.success({
    message: `✅ Fulfilled promise in ${delay}ms`,
    backgroundColor: '#1ECB75',
    ...optionsFlags,
  });

export { errorFlag, successFlag, errorFlagSnackbar, successFlagSnackbar };
