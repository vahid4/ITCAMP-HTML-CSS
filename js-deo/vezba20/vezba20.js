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

/*function vaporcode(string) {
  a = "";
  for (i = 0; i < string.length; i++) {
    const s = string[i];
    if (s !== " ") {
      const u = s.toUpperCase();
      a += u + "  ";
    }
  }

  return a.trim();
}*/

/*function spongeMeme(sentence) {
  result = "";
  for (i = 0; i < sentence.length; i++) {
    if (i % 2 === 0) {
      result += sentence[i].toUpperCase();
    } else {
      result += sentence[i].toLowerCase();
    }
  }
  return result;
}*/

/*function solve(s) {
  u = 0;
  l = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      u++;
    } else {
      l++;
    }
  }
  if (u > l) {
    return s.toUpperCase();
  } else if (u < l) {
    return s.toLowerCase();
  } else {
    return s.toLowerCase();
  }
}
*/

function toTime(seconds) {
  hours = Math.floor(seconds / 3600);
  minutes = Math.floor((seconds - hours * 3600) / 60);
  return hours + " hour(s) and " + minutes + " minute(s)";
}
