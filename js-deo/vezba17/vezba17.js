/*var library = [
  {
    author: "Bill Gates",
    title: "knjige",
    readingstatus: true,
  },
  {
    author: "daris",
    title: "kalendar",
    readingstatus: true,
  },
  {
    author: "medzid",
    title: "sveske",
    readingstatus: false,
  },
];
for (i = 0; i < library.length; i++) {
  console.log(library[i].author + " " + library[i].readingstatus);
}
*/
/*function pitanje() {
  a = prompt("Koje je vase ime?");
  b = prompt("Koje je vase prezime?");
  c = prompt("Koliko imate godina?");
  d = prompt("Koliko ste visoki?");
  var user = {
    ime: a,
    prezime: b,
    godina: c,
    visina: d,
  };
  return user;
}
//pitanje();
console.log(pitanje());
*/
/*const car = {
  name: "Audi",
  model: "A7",
};
const keys = Object.keys(car);

for (let key of keys) {
  console.log(keys[key]);
}
*/
/*biraj = prompt("Biraj bmw ili golf da ga izbacis :");
function biraj_auto(biraj) {
  var golf = {
    ime: "vw golf 7",
    godina: "2013",
    boja: "crna",
    oprema: "r line",
    pogon: "prednji",
    broj_vrata: "4/5",
  };

  var bmw = {
    ime: "bmw 5",
    godina: "2015",
    boja: "bijela",
    oprema: "m paket",
    pogon: "zadnji",
    broj_vrata: "4/5",
  };
  if (biraj === "golf") {
    console.log(bmw);
  } else if (biraj === "bmw") {
    console.log(golf);
  }
}
biraj_auto(biraj);
*/
/*function distinct(a) {
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
      if (a[j] === a[i]) {
        a.splice(i, 1);
      }
    }
  }
  console.log(a);
}
distinct([1, 1, 2]);
*/
function pyramid(balls) {
  red = 0;
  while (balls > red) {
    balls -= red;
    red++;
  }
  if (red === 1) {
    return red;
  }

  return red - 1;
}
pyramid();
