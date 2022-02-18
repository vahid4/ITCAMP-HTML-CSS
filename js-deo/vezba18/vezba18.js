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
//-----------------------
/*novi = [];
function a(b) {
  if (b > 20) {
    novi.push(b);
  }
}
numbers.forEach(a);
console.log(novi);
*/
//--------------------------
/*s = "the quick brown fox";
s = s.split("");
console.log(s);
d = "";
function a(b, c) {
  if (c % 2 === 0) {
    d += b.toLowerCase();
  } else {
    d += b.toUpperCase();
  }
}
console.log(d);
s.forEach(a);
*/

const arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
novi = [];
function a(b) {
  if (Boolean(b) === false) {
    novi.push(b);
  }
}
arr.forEach(a);
console.log(novi);
