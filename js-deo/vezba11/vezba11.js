//zadatak 1
/*
unos = prompt("koliko zelis elemenata da uneses");
ar = [];
for (i = 0; i < unos; i++) {
  element = prompt("UNesite element");
  ar[i] = element;
}
console.log(ar);
unos2 = prompt("da li je vas unos ispravan");
while (unos2 !== "da") {
  unos3 = prompt("Da li zelite da ubacite ili izbacite nesto?");
  if (unos3 === "ubacimo") {
    unos4 = prompt("Unesite element koji zelite da dodate:");
    ar.splice(0, 0, unos4);
    console.log(ar);
  } else if (unos3 === "izbacimo") {
    unos5 = prompt("UNesite element koji zelite da izbacite");
    ar.shift(unos5);
    console.log(ar);
  } 
}
*/
//zadatak 2
/*data = [3, 21, 32, 36, 37, 56, 8, 1, 12, 16, 18, 20, 68, 69];
console.log(data);

unos = prompt("unesite kojeg broja index zelite");
for (i = 0; i < data.length; i++) {
  if (data[i] === unos) {
    console.log("Vas broj je pod indexom", i);
    break;
  }
}
*/
//----------------------------------------------
/*
niz1 = [3, 21, 32, 36, 37, 56];
niz2 = [3, 21, 32, 36, 37, 56];
tacnost = true;
if (niz1.length !== niz2.length) {
  console.log("nisu isti");
} else {
  for (i = 0; i < niz1.length; i++) {
    if (niz1[i] !== niz2[i]) {
      tacnost = false;
      break;
    }
  }
}
if (tacnost) {
  console.log("isti su");
} else {
  console.log("nisu isti");
}
*/

niz = [24, 63, 74, 24, 54, 17, 96, 32, 17, 74];
novi = [];
console.log(niz);
for (i = 0; i < niz.length; i++) {
  for (j = 0; j < niz.length; j++) {
    //if (i !== j) {
    if (niz[i] == niz[j]) {
      //novi += niz[i];
      novi.push(niz[i]);
    }
  }
}
//}

console.log(novi);
//a = novi.join(",");
//console.log(a);
