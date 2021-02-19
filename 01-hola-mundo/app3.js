console.log("Inicio de scritp"); //#1

setTimeout(() => {
  console.log("Primer timeout");
}, 5000); //#05

setTimeout(() => {
  console.log("Segundo timeout"); //#03
}, 0);

setTimeout(() => {
  console.log("Tercer timeout"); //#04
}, 0);

console.log("Fin de script"); //#02
