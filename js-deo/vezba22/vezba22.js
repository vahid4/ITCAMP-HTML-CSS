//09.03.2022.
//osci model
//https, dns, port

console.log("aaaaaaaaaaaaaaaaaaaaaa");
async function GetData() {
  const response = await fetch("https://catfact.ninja/facts");
  const responseJson = await response.json();
  console.log(responseJson);
}
console.log("vvvvvvvvvvvvvvvvvvvv");
GetData();
