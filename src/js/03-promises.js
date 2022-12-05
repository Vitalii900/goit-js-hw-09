import { Notify } from 'notiflix/build/notiflix-notify-aio';

function returnValues() {
  const { delay, step, amount } = formRef.elements;
  maxAmount = Number(amount.value);
  firstDelay = Number(delay.value);
  stepValue = Number(step.value);
  // console.log(stepValue);
}

let maxAmount = 0;

let firstDelay = 0;

let stepValue = 0;

let numberOfPosition = 1;

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  returnValues();
  createSeveralPromises(maxAmount);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
    numberOfPosition += 1;
    firstDelay += stepValue;
  });
}

function createSeveralPromises(number) {
  for (let i = 0; i < number; i += 1) {
    createPromise(numberOfPosition, firstDelay)
      .then(result => Notify.success(result))
      .catch(result => Notify.failure(result));
  }
}
