const ciclos = parseInt(prompt("¿Cuantas veces vamos a jugar?"));

for (let i = 1; i <= ciclos; i++) {
  function play(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let computer = play(0, 3);

  const user = (parseInt(
    prompt("Escribe el número correspondiente a tu elección:( 0 ) Piedra ( 1 ) Papel ( 2) Tijera"))
  );

  let piedra = 0;
  let papel = 1;
  let tijera = 2;

  let opcion = ["Piedra", "Papel", "Tijera"];

  alert("Elegiste " + opcion[user]);
  alert("computadora eligió " + opcion[computer]);



  if (user == piedra) {
         if (computer == piedra) {
           alert("Empate");
         } else if (computer == papel) {
           alert("Perdiste");
         } else if (computer== tijera) {
           alert("Ganaste");
         }
      } else if (user == papel) {
         if (computer == piedra) {
           alert("Ganaste");
         } else if (computer == papel) {
           alert("Empate");
         } else if (computer == tijera) {
           alert("Perdiste");
         }
       } else if (user == tijera) {
         if (computer == piedra) {
           alert("Perdiste");
         } else if (computer == papel) {
           alert("Ganaste");
         } else if (computer == tijera) {
           alert("Empate");
         }
       } else {
         alert("error");
       }
    }
    
