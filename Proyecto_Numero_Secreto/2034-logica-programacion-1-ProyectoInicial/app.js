let numeroSecreto = 4;
let numeroUsuario = 0;
while (numeroUsuario != numeroSecreto) {
  let numeroUsuario = prompt("Me indicas un numero por favor:");

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    alert(`Felicidades, acertaste el numero , el numero es: ${numeroUsuario}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero es menor");
    } else {
      alert("El numero secreto es maywwwor");
    }
  }
}
