import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  dateTimePicker: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

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
  return String(value).padStart(2, '0');
}

let userSelectedDate = null;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  dateFormat: "Y-m-d H:i",
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      refs.startBtn.disabled = true;
      refs.startBtn.style.backgroundColor = '#cfcfcf';
      refs.startBtn.style.color = '#989898';
    } else {
      refs.startBtn.disabled = false;
      refs.startBtn.style.backgroundColor = '#4e75ff';
      refs.startBtn.style.color = '#fff';
    }
  },
};

flatpickr(refs.dateTimePicker, options);

refs.startBtn.addEventListener('click', () => {
  if (!userSelectedDate) return;

  refs.dateTimePicker.disabled = true;
  refs.startBtn.style.backgroundColor = '#cfcfcf';
  refs.startBtn.style.color = '#989898';
  refs.dateTimePicker.disabled = true;
  const timerInterval = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = userSelectedDate - currentDate;
    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      iziToast.success({
        title: 'Success',
        message: 'Timer stoped',
      });
      refs.startBtn.disabled = false;
      refs.startBtn.style.backgroundColor = '#4e75ff';
      refs.startBtn.style.color = '#fff';
      refs.dateTimePicker.disabled = true;
      return;
    }

    const timeParts = convertMs(timeDifference);
    refs.days.textContent = addLeadingZero(timeParts.days);
    refs.hours.textContent = addLeadingZero(timeParts.hours);
    refs.minutes.textContent = addLeadingZero(timeParts.minutes);
    refs.seconds.textContent = addLeadingZero(timeParts.seconds);
  }, 1000);

  refs.startBtn.disabled = true;
  refs.dateTimePicker.disabled = true;
});
