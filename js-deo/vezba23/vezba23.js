//console.log(document);
//const el = document.getElementById("heading");
//const el = document.getElementsByClassName("main");
//const el=document.getElementsByName();
//const el = document.getElementsByTagName()
//const il = document.querySelector("div");
//console.log(el);
//console.log(il);
/*el.style.backgroundColor = "aqua";
el.style.color = "gray";

const il = document.getElementById("drugi");
//console.log(il);
il.style.backgroundColor = "grey";
il.style.color = "yellow";
il.style.fontSize = "15px";
sl = document.getElementById("treci");
sl.style.color = "blue";
sl.style.backgroundColor = "orange";
console.log(el);
console.log(il);
console.log(sl);
*/

//const noviel = document.createElement("h1");
//noviel.innerText = "novi element";
//console.log(noviel);
/*novi = "";
async function GetData() {
  const response = await fetch("https://catfact.ninja/facts");
  const responseJson = await response.json();
  console.log(responseJson);
  for (i = 0; i < responseJson.length; i++) {
    novi.push(responseJson[i].name);
  }
  console.log(novi);
}

GetData();
*/

/*novi = [];
async function GetData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseJson = await response.json();
    console.log(responseJson);
    for (i = 0; i < responseJson.length; i++) {
      novi.push(responseJson[i].name);
    }
    console.log(novi);
  } catch (err) {
    console.log(err);
  }
}
GetData();
*/
/*async function GetData() {
  const response = await fetch("https://catfact.ninja/facts");
  const responseJson = await response.json();
  console.log(responseJson);
}
GetData();
*/

/*async function GetData() {
  novi = [];
  main = document.getElementById("main");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseJson = await response.json();
    console.log(responseJson);
    for (i = 0; i < responseJson.length; i++) {
      novi.push(responseJson[i].name);
    }
    for (i = 0; i < novi.length; i++) {
      const noviel = document.createElement("p");
      noviel.innerText = novi[i];
      main.appendChild(noviel);
    }
    console.log(novi);
  } catch (err) {
    console.log(err);
  }
}
GetData();
*/
//sad = document.getElementById("main");
//console.log(sad);
//sad.classList.add("klasa");
//sad.classList.remove("klasa");

/*function klik() {
  opa = document.getElementById("tri");
  // opa.classList.add("naslovKlasa");
  if (opa.classList.contains("naslovKlasa")) {
    opa.classList.remove("naslovKlasa");
  } else {
    opa.classList.add("naslovKlasa");
  }
  console.log(opa);
}*/
//drugi nacin
//opa.classList.toggle("naslovKlasa")

/*function dugme() {
  novo = document.getElementById("dva");

  if (novo.style.backgroundColor == "blue") {
    novo.style.backgroundColor = "gray";
  } else {
    novo.style.backgroundColor = "blue";
  }
  console.log("kliknuo si ga");
}
*/
/*function dugme() {
  async function GetData() {
    novi = [];
    main = document.getElementById("main");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const responseJson = await response.json();
      console.log(responseJson);
      for (i = 0; i < responseJson.length; i++) {
        novi.push(responseJson[i].name);
      }
      for (i = 0; i < novi.length; i++) {
        const noviel = document.createElement("p");
        noviel.innerText = novi[i];
        main.appendChild(noviel);
      }
      console.log(novi);
    } catch (err) {
      console.log(err);
    }
  }
  GetData();
}

//vezbanje
*/

//const el = document.getElementById("dva");
/*el.addEventListener("click", (e) => {
  console.log(e);
});
*/

/*const inp = document.getElementById("name");
inp.addEventListener("change", inputHandler);
console.log(inp);
function inputHandler() {
  console.log("promijenio si nesto brate");
  console.log(inp);
}*/
const e = document.getElementById("email");
const n = document.getElementById("name");
const p = document.getElementById("password");
const u = document.getElementById("username");
//console.log(e);
e.addEventListener("change", () => {
  console.log(e.value);
});
n.addEventListener("change", () => {
  console.log(n.value);
});
p.addEventListener("change", () => {
  console.log(p.value);
});
u.addEventListener("change", () => {
  console.log(u.value);
});
const objekat = {};
console.log(objekat);
dugme = document.getElementById("dva");
dugme.addEventListener("submit", () => {});
