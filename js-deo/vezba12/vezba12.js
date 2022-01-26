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

a = [3, 6, 23, 0, 9, 44, 0, 14, 83, 22, 5, 1];
max = a[0];
min = a[0];
for (i = 0; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
  } else if (min > a[i]) {
    min = a[i];
  }
}

console.log("Razlika je", max - min);
