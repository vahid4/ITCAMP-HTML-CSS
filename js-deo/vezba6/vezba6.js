//zadatak 1- ispisati kubni brojeva
/*a = parseInt(prompt("Unesite pocetnu vrednost:"));
b = parseInt(prompt("Unesite krajnju vrednost:"));
sum = 1;

for (i = a; i <= b; i++) {
  console.log(i ** 3);
}*/
//zadatak- ispisati proste brojeve
/*a = parseInt(prompt("Unesite pocetnu vrednost:"));
b = parseInt(prompt("Unesite krajnju vrednost:"));

for (i = a; i <= b; i++) {
  delioci = 0;
  for (j = 1; j <= i; j++) {
    if (i % j === 0) {
      delioci++;
    }
  }
  if (delioci === 2) {
    console.log(i);
  }
}*/
//zadatak- NZD
/*a = parseInt(prompt("Unesite prvi broj:"));
b = parseInt(prompt("Unesite drugi broj"));
for (i = a; i < 9000; i++) {
  //console.log(i);
  if (i % a === 0 && i % b === 0) {
    console.log(i);
    break;
  }
}*/
a = parseInt(prompt("Koliko vas text ima karaktera:"));
b = parseInt(prompt("Unesite karakter:"));
sum = "";
for (i = 0; i <= a; i++) {
  sum += a;
}
console.log(sum);
