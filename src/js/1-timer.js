import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputRef = document.querySelector('#datetime-picker');
const btnRef = document.querySelector('button');
const secRef = document.querySelector('[data-seconds]');
const minRef = document.querySelector('[data-minutes]');
const hourRef = document.querySelector('[data-hours]');
const dayRef = document.querySelector('[data-days');

let userSelectedDate;
let currentTime;
let timerId;

btnRef.setAttribute('disabled', true);
btnRef.addEventListener('click', onStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    currentTime = Date.now();

    if (userSelectedDate < currentTime) {
      iziToast.error({
        title: '',
        message: 'Please choose a date in the future',
        position: 'bottomLeft',
      });
    }

    if (userSelectedDate > currentTime) {
      btnRef.removeAttribute('disabled', true);
    }
  },
};

flatpickr(inputRef, options);

function onStart() {
  inputRef.setAttribute('disabled', true);

  timerId = setInterval(() => {
    currentTime = Date.now();
    const time = userSelectedDate - currentTime;
    const getTime = convertMs(time);

    secRef.textContent = getTime.seconds;
    minRef.textContent = getTime.minutes;
    hourRef.textContent = getTime.hours;
    dayRef.textContent = getTime.days;

    if (time < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
