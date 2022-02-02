//delete space iz stringa
/*str = "asd asv asv ga agas qf wd c as af fa sga fs qqfa ca a";
novi = "";
for (i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    novi += str[i];
  }
}
console.log(novi);
*/

//dobijemo godinu a ono nam vrati vek
/*godina = parseInt(prompt("Unesite godinu:"));
vek = Math.ceil(godina / 100);
console.log(vek);
*/

//a needle in the haystack
/*niz = ["bostan", "paprika", "paradajz", "needle", "medzid", "vahid"];
novi = "";
for (i = 0; i < niz.length; i++) {
  if (niz[i] === "needle") {
    novi = i;
  }
}
console.log("Needle je pod indexom", novi);
*/
//   ili
/*
novi=indexOf("needle");
*/
/*
prvi = parseInt(prompt("Unesite prvi broj"));
drugi = parseInt(prompt("Unesite drugi broj"));
operacija = prompt("Unesite operaciju");
if (operacija === "+") {
  console.log(prvi + drugi);
} else if (operacija === "-") {
  console.log(prvi - drugi);
} else if (operacija === "*") {
  console.log(prvi * drugi);
} else if (operacija === "/") {
  console.log(prvi / drugi);
}
*/
niz = [
  "Keep",
  "Remove",
  "Keep",
  "Remove",
  "Keep",
  "Remove",
  "Keep",
  "Remove",
  "Keep",
];
novi = [];
for (i = 0; i < niz.length; i += 2) {
  novi.push(niz[i]);
}
console.log(novi);
