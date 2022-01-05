//unos=prompt("Unesite neki string:");
/*for (i = 7; i > 0; i--) {
  console.log(i);
}*/
//tablica mnozenja:
/*for (i = 1; i < 11; i++) {
  for (j = 1; j < 11; j++) {
    console.log("Proizvod", i, "i", j, "je", i * j);
  }
}*/
//crtanje zvezdica
/*sum = "";
char = " *";
for (i = 1; i < 11; i++) {
  console.log((sum += char));
}*/
//zadatak koji proverava da li je string polindrom
/*a = prompt("unesite neki string");
c = "";
for (i = a.length - 1; i >= 0; i--) {
  c += a[i];
}
if (a === c) {
  console.log("palindrom je");
} else {
  console.log("nije palindrom");
}*/

//crtanje pravouglog trougla brojevima
for (i = 1; i < 11; i++) {
  sum = "";
  for (j = 1; j <= i; j++) {
    sum += i;
  }
  console.log(sum);
}
