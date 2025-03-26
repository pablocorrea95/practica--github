let menu;
let resultado = [];

const comprarEntradas = (artista) => {
  alert(`Has seleccionado a ${artista}. Procediendo a la compra de entradas.`);
  let cantidadTickets = prompt("Ingrese la cantidad de tickets que desee:");
  let formaPago = prompt("¿Cómo abonará?");
  let cuotas = prompt("Cantidad de cuotas:");
  resultado.push(cantidadTickets, formaPago, cuotas);
  alert(
    `Resumen de la compra: \nArtista: ${artista} \nNúmero de tickets: ${cantidadTickets} \nForma de pago: ${formaPago} \nCuotas: ${cuotas}`
  );
};

do {
  menu = prompt(
    "Elija su artista por favor: \n1) Tool \n2) Babasonicos \n3) Panam \n4) Almendra \n5) Salir"
  );

  switch (menu) {
    case "1":
      comprarEntradas("Tool");
      break;
    case "2":
      comprarEntradas("Babasonicos");
      break;
    case "3":
      comprarEntradas("Panam");
      break;
    case "4":
      comprarEntradas("Almendra");
      break;
    case "5":
      alert("¡¡¡Gracias por su compra!!! :DD");
      break;
    default:
      alert("Opción no válida. Por favor, elija una opción del 1 al 5.");
  }
} while (menu !== "5");
