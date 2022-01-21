//voce = ["banana", "jabuka", "sljiva"];
/*voce.push("africka");
console.log(voce);
---------------------
a = voce.pop();
console.log(voce);
*/
//-------------------
/*a = voce.join("+");
console.log(a);*/
//--------------------

/*console.log(voce);
a = voce.shift();
console.log(voce);
console.log(a);
*/

/*console.log(voce);
a = voce.unshift("novo");
console.log(voce);
console.log(a);
*/

/*console.log(voce);
povrce = ["paprika", "paradajz", "bostan"];
a = voce.concat(povrce);
console.log(a);
*/
povrce = ["paprika", "paradajz", "bostan", "banana"];
voce = ["banana", "jabuka", "sljiva", "tresnja", "visnja"];

/*voce.splice(1, 2, "KRUSKAAAA", "KIWIII");
console.log(voce);
*/

/*a = voce.slice(1, 2);
console.log(a);
*/
//pronaci iste elemente dva niza
isti = [];
/*for (i = 0; i < voce.length; i++) {
  for (j = 0; j < povrce.length; i++) {
    if (povrce[i] === voce[i]) {
      isti=[i]
    }
  }
}
clg(isti);
*/
// ----drugi nacin------
/*a = voce.concat(povrce);
console.log(a);
for (i = 0; i < a.length; i++) {
  if (a[i] === a[i]) {
    isti = a[i];
  }
}
console.log(isti);
*/
//--------------------------------
//nacin for-a da prolazi kroz sve elemente niza
/*for (el of voce) {
  console.log(el);
}*/
//------------------------------------
svasta = [2, true, undefined, "", false, null, 3, 5];

for (i = 0; i < svasta.length; i++) {
  if (Boolean(svasta[i]) != true) {
    svasta.splice(i, 1);
  }
}
console.log(svasta);
