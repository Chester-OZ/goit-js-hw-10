import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import convertMs from '../modules/converter';
import { errorFlag, successFlag } from '../modules/iziToast';

const buttonTimer = document.querySelector('button[data-start]');
const dateInput = document.querySelector('#datetime-picker');

let userSelectDate;
let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectDate = selectedDates[0];
    const currentDate = new Date();
    if (selectDate < currentDate) {
      errorFlag();
      buttonTimer.disabled = true;
    } else {
      userSelectDate = selectDate;
      buttonTimer.disabled = false;
    }
  },
};

const dateTimePicker = flatpickr('#datetime-picker', options);

buttonTimer.disabled = true;
buttonTimer.addEventListener('click', startTimer);

function startTimer() {
  buttonTimer.disabled = true;
  dateTimePicker.input.disabled = true;

  timerInterval = setInterval(() => {
    const remainingTime = userSelectDate - new Date();
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      updateTimer(0, 0, 0, 0);
      successFlag();
      dateInput.disabled = false;
    } else {
      const { days, hours, minutes, seconds } = convertMs(remainingTime);
      updateTimer(days, hours, minutes, seconds);
    }
  }, 1000);
}

function updateTimer(days, hours, minutes, seconds) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent =
    addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent =
    addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}
