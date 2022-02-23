/*numbers = [45, 19, 74, 82, 14, 17, 16, 30, 35, 62];
filtrirani = numbers.filter((el) => {
  return el > 18;
});
console.log(filtrirani);
*/
/*numbers = [45, 19, 74, 82, 14, 17, 16, 30, 35, 62];
filtrirani = numbers.filter((el) => {
  return el % 2 === 0;
});
console.log(filtrirani);
*/
/*function damir(numbers) {
  return numbers.filter((el) => {
    return el >= 5;
  });
}
console.log(damir([3, 6, 8, 2]));
*/
function damir(numbers) {
  return numbers.filter((el) => {
    return el.length <= 5;
  });
}
console.log(damir(["dog", "wolf", "by", "family", "eaten", "camping"]));
