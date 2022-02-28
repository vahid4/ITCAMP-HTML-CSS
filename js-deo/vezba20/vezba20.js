/*const numbers = [18, 16, 2, 7, 9];
const b = numbers.indexOf(7);
console.log(b);
*/

/*const numbers = [18, 16, 2, 7, 9];
const b = numbers.find((el) => {
  return el % 2 === 0;
});

console.log(b);
*/
/*const numbers = [18, 16, 2, 7, 9];
const b = numbers.includes(2);

console.log(b);
*/
/*a=[]
function fn(){
    
}
function gridMap(fn, a) {
  return a.map((el) => {
    return fn(a);
  });
}*/
/* 
s = "OS IS UPDATED";
function shifter(s) {
  s = s.split(" ");
  //console.log(s);
  return (a = s.filter((el) => {
    //return console.log(el);
    el = el.split("");
    //console.log(el);
    el.filter((value) => {
      // console.log(value);
      novi = [];
      if (
        value === "H" ||
        value === "I" ||
        value === "N" ||
        value === "O" ||
        value === "S" ||
        value === "Z" ||
        value === "X"
      ) {
        novi.push(value);
        console.log(novi);
        //console.log("---------------");
        najnoviji = [];
        /*for (i = 0; i < novi.length; i++) {
          if (!najnoviji.includes(novi[i])) {
            najnoviji.push(novi[i]);
            console.log(najnoviji);
          } else console.log(false);
        }*/
/*najnoviji = [...new Set(novi)];
        console.log(najnoviji);
      } else return false;
    });
  }));
}
shifter(s);*/
/*s = "OS IS UPDATED";
function shifter(s) {
  s = s.split(" ");
  console.log(s);
  return s.map((el) => {
    el = el.split("");
    //console.log(el);
    return (b = el.map((value) => {
      //return console.log(value);

      var novi = [];
      if (
        value === "H" ||
        value === "I" ||
        value === "N" ||
        value === "O" ||
        value === "S" ||
        value === "Z" ||
        value === "X"
      ) {
        novi.push(value);
        console.log(novi);
        brojac = 0;
        if (el.includes(novi)) {
          brojac++;
          console.log(el);
        }
      }
    }));
  });
}
shifter(s);
*/
