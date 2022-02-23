/*numbers = [45, 19, 74, 82, 14, 17, 16, 30, 35, 62];
filtrirani = numbers.filter((el) => {
  return el > 18;
});
console.log(filtrirani);
*/
/*numbers = [45, 19, 74, 82, 14, 17, 16, 30, 35, 62];
filtrirani = numbers.filter((el) => {
  return el % 2 === 0;
});
console.log(filtrirani);
*/
/*function damir(numbers) {
  return numbers.filter((el) => {
    return el >= 5;
  });
}
console.log(damir([3, 6, 8, 2]));
*/
/*function damir(numbers) {
  return numbers.filter((el) => {
    return el.length <= 5;
  });
}
console.log(damir(["dog", "wolf", "by", "family", "eaten", "camping"]));
*/
/*function Iluminati(arr) {
  return arr.filter((el) => {
    return el.member;
  });
}
console.log(
  Iluminati([
    {
      name: "Damir",
      member: true,
    },
    {
      name: "tito",
      member: false,
    },
    {
      name: "salko",
      member: false,
    },
    {
      name: "amin",
      member: true,
    },
    {
      name: "dado",
      member: false,
    },
  ])
);
*/
/*function Iluminati(arr) {
  return arr.filter((el) => {
    return el.age > 18;
  });
}
console.log(
  Iluminati([
    {
      name: "Damir",
      member: true,
      age: 69,
    },
    {
      name: "tito",
      member: false,
      age: 14,
    },
    {
      name: "salko",
      member: false,
      age: 39,
    },
    {
      name: "amin",
      member: true,
      age: 32,
    },
    {
      name: "dado",
      member: false,
      age: 15,
    },
  ])
);
*/
/*function damir(numbers) {
  return numbers.filter((el, i) => {
    return i % 2 == 0;
  });
}
console.log(damir(["dog", "wolf", "by", "family", "eaten", "camping"]));
*/
/*numbers = [45, 19, 74, 82, 14, 17, 16, 30, 35, 62];
filtrirani = numbers.every((el) => {
  return el > 18;
});
console.log(filtrirani);
*/
/*numbers = [44, 18, 74, 82, 14, 120, 16, 30, 36, 62];
filtrirani = numbers.every((el) => {
  return el % 2 === 0;
});
console.log(filtrirani);
*/

/*function damir(numbers) {
  return numbers.filter((el) => {
    return el.length <= 5;
  });
}
console.log(damir(["dog", "wolf", "by", "family", "eaten", "camping"]));
*/
/*function Iluminati(arr) {
  return arr.every((el) => {
    return el.member;
  });
}
console.log(
  Iluminati([
    {
      name: "Damir",
      member: true,
    },
    {
      name: "tito",
      member: true,
    },
    {
      name: "salko",
      member: true,
    },
    {
      name: "amin",
      member: true,
    },
    {
      name: "dado",
      member: true,
    },
  ])
);
*/
numbers = [14, 13, 15, 17, 9, 4, 8];
filtrirani = numbers.some((el) => {
  return el % 2 === 0;
});
console.log(filtrirani);
