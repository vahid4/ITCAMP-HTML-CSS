/*function sayHello() {
  console.log("Zovem se Vahid");
}
sayHello();
*/
//-------------------------------------
/*
function zbir(params) {
  a = parseInt(prompt("unesite prvi broj:"));
  b = parseInt(prompt("unesite drugi  broj:"));
  sum = a + b;
  console.log("Zbir ova dva broja je", sum);
}
zbir();
*/
//-----------------------------------
/*function sum(a, b) {
  console.log(a + b);
}
sum(5, 7);
*/
//-------------------------------
/*function reverse() {
  a = prompt("Unesite string");
  novi = "";
  for (i = a.length - 1; i >= 0; i--) {
    novi += a[i];
  }
  console.log(novi);
}
reverse();
*/
//--------------------
/*function velika(str) {
  str.toUpperCase();

  console.log(str);
  return str;
}
velika("vahid");
*/
//----------------------------
/*function repeatStr(n, s) {
  for (i = 0; i <= n; i++) {
    console.log(s);
  }
}
repeatStr(6, "vahid");
*/
/*function dane(bool) {
  if (bool === true) {
    console.log("yes");
  } else if (bool === false) {
    console.log("no");
  }
}
dane(true);
*/
godineoca = 50;
godinesina = 30;
brojgodina = 0;
if (godineoca === godinesina * 2) {
  brojgodina = 0;
  console.log("Otac je trenutno duplo stariji od sina");
} else if (godineoca > godinesina * 2) {
  brojgodina = godineoca - godinesina * 2;
  console.log("Otac ce biti duplo stariji od sina za", brojgodina, "godina");
} else if (godineoca < godinesina * 2) {
  brojgodina = 2 * godinesina - godineoca;
  console.log("bilo je  pre ", brojgodina, "godina");
}
