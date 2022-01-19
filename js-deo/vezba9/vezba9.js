/*unos = parseInt(prompt("koliko zelis elemenata da uneses"));
ar = [];
for (i = 0; i < unos; i++) {
  element = prompt("UNesite element");
  ar[i] = element;
}
console.log(ar);

for (i = ar.lenght - 1; i >= 0; i--) {
  console.log(ar[i]);
}
console.log(ar[i]);
*/
/*unos = parseInt(prompt("koliko zelis brojeva da uneses"));
ar = [];
for (i = 0; i < unos; i++) {
  brojevi = parseInt(prompt("UNesite element"));
  ar[i] = brojevi;
}
console.log(ar);
zbir = 0;
for (i = 0; i < ar.length; i++) {
  zbir += ar[i];
}
console.log(zbir);
*/
ar = [2, 12, 1, 7, 19, 74, 23, 4, 3];
max = ar[0];
for (i = 0; i < ar.length; i++) {
  if (max < ar[i]) {
    max = ar[i];
  }
}
console.log(max);
