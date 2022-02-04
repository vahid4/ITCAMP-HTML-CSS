/*function squareSum(numbers) {
  kvad = 0;
  sum = 0;
  for (i = 0; i < numbers.length; i++) {
    kvad = Math.pow(niz[i], 2);
    sum += kvad;
  }

  return sum;
}
squareSum(1, 2, 2);
*/
//-------------------------------
/*var niz = "Hi! HI! Hi! ";
for (i = 0; i < niz.length; i++) {
  if (niz[i] === "!") {
    niz = niz.splice(i, 1);
  }
}
niz.concat("!");
console.log(niz);
*/
//ispisi u codewars
//Abbreviate a Two Word Name
/*function abbrevName(name) {
  novi = "";
  for (i = 0; i < name.length; i++) {
    if (name[i] == " ") {
      novi = name[0] + "." + name[i + 1];
    }
  }
  console.log(novi);
  return novi;
}
abbrevName("Vahid Gasanin");
*/
function enough(cap, on, wait) {
  a = 0;

  if (cap - (on + wait) < 0) {
    a = cap - (on + wait);
  } else if (cap - (on + wait) > 0) {
    a = 0;
  }
  console.log(a);
}
enough(100, 60, 50);
