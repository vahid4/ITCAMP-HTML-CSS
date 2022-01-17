//unesemo tezinu i visinu i racuna nam bmi. bmi se racuna tako sto tezinu podeli sa visinom na kvadrat

/*tezina = prompt("Unesite tezinu");
visina = prompt("Unesite visinu u metrima");
bmi = tezina / visina ** 2;
console.log(bmi);
if (bmi <= 18.5) {
  console.log("Underweight");
} else if (bmi <= 25) {
  console.log("Normal");
} else if (bmi <= 30) {
  console.log("Overweight");
} else if (bmi > 30) {
  console.log("Obese");
}*/

//unesemo broj i ispise nam sve neparne brojeve od 1 do njega
/*broj = parseInt(prompt("Unesite broj:"));
i = 1;
while (i <= broj) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}*/
broj = prompt("Unesite broj:");
while (broj !== "STOP") {
  if (broj == 0) {
    console.log("ZERO");
  } else if (broj > 0) {
    console.log("POZITIVAN");
  } else if (broj < 0) {
    console.log("NEGATIVAN");
  }
  broj = prompt("Unesite broj:");
}
