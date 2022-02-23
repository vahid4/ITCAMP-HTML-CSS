/*numbers = [45, 19, 74, 82, 14, 17, 16, 30, 35, 62];
filtrirani = numbers.filter((el) => {
  return el > 18;
});
console.log(filtrirani);
*/
numbers = [45, 19, 74, 82, 14, 17, 16, 30, 35, 62];
filtrirani = numbers.filter((el) => {
  return el % 2 === 0;
});
console.log(filtrirani);
