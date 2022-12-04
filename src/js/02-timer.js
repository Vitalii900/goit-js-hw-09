import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const startButtonRef = document.querySelector('button[data-start]');
startButtonRef.disabled = true;

const timePickerRef = document.querySelector('#datetime-picker');

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(new Date());
    if (selectedDates[0] < new Date()) {
      startButtonRef.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
        startButtonRef.disabled = false;
        startButtonRef.addEventListener(
          'click',
          startTimerClick(selectedDates[0])
        );
    }
  },
};

flatpickr(timePickerRef, options);

function startTimerClick(time) {
    setInterval(() => {
        const currentDate = new Date;
        const deltaTime = time - currentDate;
        const timeComponents = convertMs(deltaTime);
        // console.log(timeComponents);
    }, 1000);
}









function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}