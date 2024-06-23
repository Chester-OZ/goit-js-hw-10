import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const errorFlag = () =>
  iziToast.error({
    title: 'Error',
    message: 'Please choose a date in the future',
    icon: '',
    messageColor: 'white',
    timeout: 2000,
    backgroundColor: '#CB1E1E',
    position: 'topRight',
    close: false,
    closeOnEscape: true,
    closeOnClick: true,
    displayMode: 'replace',
  });

const successFlag = () =>
  iziToast.success({
    title: 'Success',
    message: 'Countdown finished!',
    icon: '',
    messageColor: 'white',
    timeout: 2000,
    backgroundColor: '#1ECB75',
    position: 'topRight',
    close: false,
    closeOnEscape: true,
    closeOnClick: true,
    displayMode: 'replace',
  });

const errorFlagSnackbar = delay =>
  iziToast.error({
    message: `❌ Rejected promise in ${delay}ms`,
    icon: '',
    messageColor: 'white',
    timeout: 2000,
    backgroundColor: '#CB1E1E',
    position: 'topRight',
    close: false,
    closeOnEscape: true,
    closeOnClick: true,
    displayMode: 'replace',
  });

const successFlagSnackbar = delay =>
  iziToast.success({
    position: 'topRight',
    message: `✅ Fulfilled promise in ${delay}ms`,
    icon: '',
    messageColor: 'white',
    timeout: 2000,
    backgroundColor: '#1ECB75',
    position: 'topRight',
    close: false,
    closeOnEscape: true,
    closeOnClick: true,
    displayMode: 'replace',
  });

export { errorFlag, successFlag, errorFlagSnackbar, successFlagSnackbar };
