/*broj1 = prompt("Unesite prvi broj");
broj2 = prompt("Unesite drugi broj");
*/
/*console.log(Boolean(" "));
 */
//var1 = true;
//var2 = false;
//a = 5;
//b = 10;
/*console.log(true && true);
console.log(true && true === false);
*/

/*broj1 = prompt("Unesite neki broj");
//broj2 = prompt("Unesite drugi broj");
console.log("Broj je paran:", broj1 % 2 === 0);
*/
//a = "Vahid je srednjoskolac i to je cetvrta godina Gimnazije u Novom Pazaru";
//console.log(a.length);
/*ime = prompt("Unesite Vase ime:");
duzina = ime.length;
console.log("Duzina vaseg imena je", duzina);
*/
// Odavde pocinje cas 24.12.2021.
/*
ime = prompt("Unesite Vase ime:");
slovo = prompt("Unesite slovo:");
console.log(ime.toUpperCase());
console.log(ime.toLowerCase());
console.log(ime.concat(" Gasanin"));
//console.log(ime.indexOf("d"));
console.log("Vase ime sadrzi odabrano slovo", slovo, ":", ime.includes(slovo));
console.log(
  "Odabrano slovo",
  slovo,
  " se nalazi na poziciji :",
  ime.indexOf(slovo)
);
*/
/*a = "Vahid Gasanin, Medzid Jasarovic, Daris Hodzic";
nesto = a.slice(7, 43);
console.log("Iseceni deo stringa:", nesto);
*/

/*a = "Vahid Gasanin, Medzid Jasarovic, Daris Hodzic";
nesto = a.slice(7, 9);
console.log("Iseceni deo stringa:", nesto);
*/
/*
text = "Ja sam Medzid Jasarovic";
zamena = text.replace("Medzid", "Vahid");
console.log(zamena);
*/
/*
text = "Ja sam Medzid Jasarovic";
console.log(text.charAt(4));
*/

/*text = "Ja sam Medzid Jasarovic";
console.log(text.split("a"));
*/
//19:22 je 49%
/*
//dinamicki string
text = "Vahid";
console.log(`Vase ime je ${text} i tako cete biti upisani`);
*/
//ispisivanje random broja i njegovo zaokruzivanje
/*
a = Math.random() * 100;
console.log(Math.round(a));
*/
/*
broj1 = prompt("Unesite prvi broj:");
broj2 = prompt("Unesite drugi broj:");
if (parseInt(broj1) > parseInt(broj2)) {
  console.log("Prvi broj je veci od drugog");
} else {
  console.log("Drugi broj je veci");
}
*/
/*
broj1 = prompt("Unesite broj izmedju 1-10:");
if (1 < parseInt(broj1) && parseInt(broj1) < 10) {
  console.log("Unos je tacan");
} else {
  console.log("Unos je netacan");
}
*/
//Domaci
//Napisati program koji proverava da li je uneti string duplirana = "vahidvahid";
/*b = a.slice(0, 5);
c = a.slice(5, 10);
//console.log(b, c);
if (b == c) {
  console.log("Dupliran je");
} else {
  console.log("nije dupliran");
}
*/
/*a = prompt("Unesite neki string:");
b = a.length;
*/
//od 5 do 11 je jutro do 18 je dan do 20 je vece do 5 sutra je noc
/*a = 6;
if (a > 5 && a < 11) {
  console.log("Jutro je");
} else if (a > 11 && a < 18) {
  console.log("Dan je");
} else if (a > 18 && a < 20) {
  console.log("Vece je");
} else if ((a > 20 && a < 24) || (a > 0 && a < 5)) {
  console.log("Noc je");
} else if (a > 24) {
  console.log("Dan ima max 24h");
}*/
//uneti listu bodova i kada unesemo broj bodova da nam program ispise ocenu
a = prompt("Unesite broj bodova:");
if (a < 50) {
  console.log("Kolega pali ste HAHAHHAHAHAH");
} else if (a < 60) {
  console.log("Dobili ste ocenu 6");
} else if (a < 70) {
  console.log("Dobili ste ocenu 7");
} else if (a < 80) {
  console.log("Dobili ste ocenu 8");
} else if (a < 95) {
  console.log("Dobili ste ocenu 9");
} else if (a <= 100) {
  console.log("Dobili ste ocenu 10");
} else if (a > 100) {
  console.log("Kolega slagali ste");
}
