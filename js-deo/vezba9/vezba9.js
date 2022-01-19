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
unos = parseInt(prompt("koliko zelis brojeva da uneses"));
ar = [];
//zbir = 0;
for (i = 0; i < unos; i++) {
  brojevi = parseInt(prompt("UNesite element"));
  // zbir += brojevi;
  ar[i] = brojevi;
}
console.log(ar);
//console.log(zbir);
zbir = 0;
for (i = 0; i < ar.length; i++) {
  zbir += ar[i];
}
console.log(zbir);
