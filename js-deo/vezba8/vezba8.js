//unesemo tezinu i visinu i racuna nam bmi. bmi se racuna tako sto tezinu podeli sa visinom na kvadrat

tezina = prompt("Unesite tezinu");
visina = prompt("Unesite visinu u metrima");
bmi = tezina / visina ** 2;
/*console.log(tezina);
console.log(visina);
console.log(bmi);*/
console.log(bmi);
if (bmi <= 18.5) {
  console.log("Underweight");
} else if (bmi <= 25) {
  console.log("Normal");
} else if (bmi <= 30) {
  console.log("Overweight");
} else if (bmi > 30) {
  console.log("Obese");
}
