alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert("¡Error! Completa todos los campos");
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
nombre = prompt("digite nombre de usuario");
console.log(nombre);
edad = prompt("ingresa tu edad: ");
console.log(edad);
if (edad >= 18) {
  alert("aprovado por challane");
} else {
  alert("perdiste");
}
