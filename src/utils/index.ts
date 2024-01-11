export function randomNumber(max: number, min: number = 0): number {
  const range = max - min;
  const randomNumber = Math.floor(Math.random() * range);

  return randomNumber + min;
}

export function debounce(func: Function, delay: number) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
