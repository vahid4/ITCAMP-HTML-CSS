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
const car = {
  name: "Audi",
  model: "A7",
};
const keys = Object.keys(car);

for (let key of keys) {
  console.log(keys[key]);
}
