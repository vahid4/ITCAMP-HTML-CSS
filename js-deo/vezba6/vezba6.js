//zadatak 1- ispisati kubni brojeva
/*a = parseInt(prompt("Unesite pocetnu vrednost:"));
b = parseInt(prompt("Unesite krajnju vrednost:"));
sum = 1;

for (i = a; i <= b; i++) {
  console.log(i ** 3);
}*/
a = parseInt(prompt("Unesite pocetnu vrednost:"));
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
}
