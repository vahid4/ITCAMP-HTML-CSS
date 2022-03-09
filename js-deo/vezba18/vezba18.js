/*const numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];*/
/*function a(b) {
  console.log(Math.pow(b, 2));
}
numbers.forEach(a);
*/
//---------------------
/*function a(b) {
  if (b % 2 === 0) {
    console.log(b);
  }
}
numbers.forEach(a);
*/
//-----------------------
/*novi = [];
function a(b) {
  if (b > 20) {
    novi.push(b);
  }
}
numbers.forEach(a);
console.log(novi);
*/
//--------------------------
/*s = "the quick brown fox";
s = s.split("");
console.log(s);
d = "";
function a(b, c) {
  if (c % 2 === 0) {
    d += b.toLowerCase();
  } else {
    d += b.toUpperCase();
  }
}
console.log(d);
s.forEach(a);
*/

/*const arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
novi = [];
function a(b) {
  if (Boolean(b) === false) {
    novi.push(b);
  }
}
arr.forEach(a);
console.log(novi);*/

/*a = [1, 2, 3, 4];
const b = a.map((el, i) => {
  return el + i;
});
console.log(b);
*/
/*const numbers = [45, 4, 25, 9, 16, 7];
const b = numbers.map((number) => {
  return number ** 2;
});
console.log(b);
*/
/*const numbers = [2, 5, 100, 200];
const b = numbers.map((el) => {
  return el * 2;
});
console.log(b);
*/
/*const numbers = [2, 5, 100, 200];
novi = [];
function stringuj(arr) {
  novi=arr.map((el))=>{
return el.toString();
  }
  
}
console.log(numbers.map(numbers));
*/

//niz = ["JOhn", "jacOBS", "JinGleHeimaer", "SCHMIDT"];

/*function ispravi(arr) {
  return arr.map((el) => {
    el = el.LowerCase();
    el = el[0].toUpperCase() + el.slice(1);
    return el;
  });
}
console.log(ispravi(["JOhn", "jacOBS", "JinGleHeimaer", "SCHMIDT"]));
*/
/*function a(arr) {
  return arr.map((el) => {
    return el.name;
  });
}
console.log(
  a([
    {
      name: "Vahid",
      age: 80,
    },
    {
      name: "DAris",
      age: 80,
    },
    {
      name: "Medzid",
      age: 80,
    },
    {
      name: "Zakir",
      age: 80,
    },
  ])
);
*/
/*function a(arr) {
  return arr.map((el) => {
    if (el.age > 18) {
      return el.name + " moze u bioskop";
    } else {
      return el.name + " ne moze u bioskop";
    }
  });
}
console.log(
  a([
    {
      name: "Vahid",
      age: 80,
    },
    {
      name: "DAris",
      age: 80,
    },
    {
      name: "Medzid",
      age: 8,
    },
    {
      name: "Zakir",
      age: 13,
    },
  ])
);
*/
/*function a(arr) {
  return arr.map((el) => {
    return "<h1>" + el.name + "</h1>" + "<h2>" + el.age + "</h2>";
  });
}
console.log(
  a([
    {
      name: "Vahid",
      age: 80,
    },
    {
      name: "DAris",
      age: 80,
    },
    {
      name: "Medzid",
      age: 8,
    },
    {
      name: "Zakir",
      age: 13,
    },
  ])
);
*/
/*str = "Geogre Raymond Richard Martin";
str = str.split(" ");
console.log(str);
function a(arr) {
  return arr.map((el) => {
    el = el[0];
    return el;
  });
}
console.log(a(str).join("."));
*/
/*numbers = [45, 4, 9, 16, 25, 13, 38, 60, 61, 52, 29];
function a(b) {
  return b.map((el) => {
    if (el % 2 === 0) {
      return true;
    } else return false;
  });
}
console.log(a(numbers));
*/
niz = [1, 2, 3, 4];
novi = [];
for (i = 1; i < niz.length; i += 2) {
  //console.log(niz[i]);
  novi = [niz[1] * 2, niz[i] * 2];
}
dodaj = [];
for (i = 0; i < niz.length; i++) {
  if (i % 2 == 0) {
    //console.log(niz[i]);
    dodaj = niz.push(niz[i]);
  }
}
//console.log(novi);
console.log(dodaj);
