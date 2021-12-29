/*a = 3;
switch (3) {
  case 1:
    console.log("slucaj je jedan");
  case 2:
    console.log("slucaj je jedan");
  case 3:
    console.log("slucaj je jedan");
}
*/
/*a = parseInt(prompt("Unesite broj dana:"));

switch (a) {
  case 1:
    console.log("Danas je ponedeljak");
    break;
  case 2:
    console.log("Danas je utorak");
    break;
  case 3:
    console.log("Danas je srijeda");
    break;
  case 4:
    console.log("Danas je cetvrtak");
    break;
  case 5:
    console.log("Danas je petak");
    break;
  case 6:
    console.log("Danas je subota");
    break;
  case 7:
    console.log("Danas je nedelja");
    break;
  default:
    console.log("Pogresan unos");
}
*/
a = parseInt(prompt("Unesite broj 0-100:"));
switch (true) {
  case a >= 0 && a < 30:
    console.log("Broj je low kategorije");
    break;
  case a > 30 && a < 60:
    console.log("Broj je medium kategorije");
    break;
  case a > 60 && a <= 100:
    console.log("Broj je high kategorije");
    break;
  default:
    console.log("Pogresan unos");
}
