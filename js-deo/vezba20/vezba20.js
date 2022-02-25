/*const numbers = [18, 16, 2, 7, 9];
const b = numbers.indexOf(7);
console.log(b);
*/

const numbers = [18, 16, 2, 7, 9];
const b = numbers.find((el) => {
  return el % 2 === 0;
});

console.log(b);
