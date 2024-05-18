import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let selectDate;
const buttonTimer = document.querySelector('button');
buttonTimer.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate = selectedDates[0];
    const currentDate = new Date();
    if (selectDate <= currentDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      buttonTimer.disabled = true;
    } else {
      buttonTimer.disabled = false;
    }
  },
};

const dateTimePicker = flatpickr('#datetime-picker', options);

buttonTimer.addEventListener('click', () => {
  if (selectDate <= new Date()) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
    });
    return;
  }

  startTimer();
  dateTimePicker.destroy();
});

function startTimer() {
  buttonTimer.disabled = true;

  const timerInterval = setInterval(() => {
    const remainingTime = selectDate - new Date();
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      updateTimer(0);
      iziToast.success({
        title: 'Success',
        message: 'Countdown finished!',
      });
      buttonTimer.disabled = false;
    } else {
      updateTimer(remainingTime);
    }
  }, 1000);
}

function updateTimer(remainingTime) {
  const { days, hours, minutes, seconds } = convertMs(remainingTime);
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}
