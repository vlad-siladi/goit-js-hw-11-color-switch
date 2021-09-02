
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];




const refs = {
  body: document.body,
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]')
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(refs.stop);

 const randomColor = ()=> colors[randomIntegerFromInterval(0, colors.length - 1)]
const colorSwitcher = () => {
  refs.body.style.backgroundColor = randomColor()
}



let timer
const onClickStart = () => {
  timer = setInterval(colorSwitcher, 1000),
  refs.start.disabled = true;
}

const onClickStop = () => {
  clearInterval(timer)
  refs.start.disabled = false;
}

refs.start.addEventListener('click', onClickStart)
refs.stop.addEventListener('click', onClickStop)