const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]')
const currentValue = document.querySelector('#value');

const counter = {
  value: 0,

  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },

};

decrementBtn.addEventListener('click', () => {
  counter.decrement();
  currentValue.textContent = counter.value;
});

incrementBtn.addEventListener('click', () => {
  counter.increment();
  currentValue.textContent = counter.value;
});