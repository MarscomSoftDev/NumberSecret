let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
  console.log(
    `Felicidades, acertaste el numero , el numero es: ${numeroUsuario}`
  );
} else {
  console.log("perdiste");
}
