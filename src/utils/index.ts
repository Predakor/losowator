export function randomNumber(max: number, min: number = 0): number {
  const range = max - min;
  const randomNumber = Math.floor(Math.random() * range);

  return randomNumber + min;
}
