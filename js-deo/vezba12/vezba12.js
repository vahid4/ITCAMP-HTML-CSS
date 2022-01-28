//racuna avg vrednost niza
/*a = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];

sum = 0;
for (i = 0; i < a.length; i++) {
  sum += a[i];
}

console.log(sum / i);
*/
/*
a = [3, 6, 23, 0, 9, 44, 0, 14, 83, 22, 5, 1];
for (i = 0; i < a.length; i++) {
  if (a[i] === 0) {
    a.splice(i, 1);
    a.push(0);
  }
}

console.log(a);
*/

//a = [3, 6, 23, 0, 9, 44, 0, 14, 83, 22, 5, 1];
/*max = a[0];
min = a[0];
for (i = 0; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
  } else if (min > a[i]) {
    min = a[i];
  }
}

console.log("Razlika je", max - min);
*/

/*
b = 0;
c = 0;
a = [3, 6, 23, 0, 9, 44, 0, 14, 83, 22, 5, 1, 65, 77];
for (i = 0; i < a.length; i++) {
  if (a[i] === 65 || a[i] === 77) {
    b++;
  } else {
    c++;
  }
}
if (b > 0) {
  console.log("sadrzi");
} else {
  console.log("ne sadrzi");
}*/
//---------------------------------------
/*
a = [10, 5032, 657, 1065, 39, 6, 783, -1500, , 7200, -7100];

max = a[0];

for (i = 0; i < a.length; i++) {
  if (Math.abs(a[i]) > Math.abs(max)) {
    max = a[i];
  }
}
console.log(max);
*/

/*a = [10, 5032, 657, 1065, 39, 6, 783, -1500, , 7200, -7100];
min = a[0];
min2 = a[0];
for (i = 0; i < a.length; i++) {
  if (min > a[i]) {
    min = a[i];
  } else if (min2 > min) {
    min2 = min;
  }
}
console.log("Najmanji je:", min);
console.log("Drugi najmanji je", min2);
*/

//domaciiiiiiiiiiii------------------------------------------
niz = [1, 2, 3, 0, 5, 9, 1, 0, 3, 0, 1, 0, 5, 8, 7, 0, 2, 4];
console.log(niz);
for (i = 0; i < niz.length; i++) {
  if (niz[i] === 0) {
    niz.splice(i, 1);
    niz.push(0);
  }
  if (niz[i] === 1) {
    niz.splice(i, 1);
    niz.unshift(1);
  }
}
console.log(niz);
/*for (j = 0; j < niz.length; j++) {
  if (niz[j] === 1) {
    niz.splice(j, 1);
    niz.unshift(1);
  }
}*/
