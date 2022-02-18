const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];
/*function a(b) {
  console.log(Math.pow(b, 2));
}
numbers.forEach(a);
*/
//---------------------
/*function a(b) {
  if (b % 2 === 0) {
    console.log(b);
  }
}
numbers.forEach(a);
*/
novi = [];
function a(b) {
  if (b > 20) {
    novi.push(b);
  }
}
numbers.forEach(a);
console.log(novi);
