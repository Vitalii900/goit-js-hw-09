function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');

const buttonStartRef = document.querySelector('button[data-start]');

const buttonStopRef = document.querySelector('button[data-stop]');

let timerId = null;

buttonStartRef.addEventListener('click', startSwitcher);

buttonStopRef.addEventListener('click', stopSwitcher);

function startSwitcher() {
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
    buttonStartRef.setAttribute('disabled', '');
    buttonStopRef.removeAttribute('disabled');
}

function stopSwitcher() {
    clearInterval(timerId);
    buttonStopRef.setAttribute('disabled', '');
    buttonStartRef.removeAttribute('disabled');
}
