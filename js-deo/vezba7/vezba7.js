/*i = 2;
while (i < 9) {
  console.log(i);
  i++;
}*/

/*a = prompt("unesi neki string slobodno:");
while (a !== "end" && a !== "END") {
  a = prompt("Unesite ponovo:");
}*/
/*
sum = 0;
a = parseInt(prompt("unesi neki broj:"));
while (a >= 0) {
  sum += a;
  a = parseInt(prompt("unesite ponovo:"));
}
console.log(sum);
*/
/*a = prompt("unesi ime:");
while (a !== "end" && a !== "END") {
  console.log(a);
  a = prompt("unesi ponovo ime:");
}
console.log("I am done");
*/

/*a = parseInt(prompt("unesi ocenu:"));
sum = 0;
kolicina = 0;
while (a >= 1 && a <= 5) {
  console.log(a);
  sum += a;
  kolicina++;
  a = parseInt(prompt("unesi jos ocena:"));
}
console.log("Zbir ocena je", sum);
console.log("Srednja ocena je", sum / kolicina);
*/

a = Math.round(Math.random() * 10);
//console.log(Math.round(a));
b = parseInt(prompt("Pogadjajte broj:"));
while (b !== a) {
  if (b > a) {
    b = parseInt(prompt(" Too high, Pogadjajte  ponovo broj:"));
  } else {
    b = parseInt(prompt(" Too low, Pogadjajte  ponovo broj:"));
  }
}
//b = parseInt(prompt("Pogadjajte ponovo broj:"));
