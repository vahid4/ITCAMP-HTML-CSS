//09.03.2022.
//osci model
//https, dns, port

/*console.log("aaaaaaaaaaaaaaaaaaaaaa");
async function GetData() {
  const response = await fetch("https://catfact.ninja/facts");
  const responseJson = await response.json();
  console.log(responseJson);
}
GetData();
console.log("vvvvvvvvvvvvvvvvvvvv");
*/
novi = [];
async function GetData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const responseJson = await response.json();
  console.log(responseJson);
  for (i = 0; i < responseJson.length; i++) {
    novi.push(responseJson[i].name);
  }
  console.log(novi);
}
GetData();
