function runSaludo() {
  console.clear();
  console.log("Saludo");

  const nombre = prompt("¿Cómo te llamas?");
  if (nombre === null) {
    console.log("Usuario canceló.");
    return "Cancelado por el usuario.";
  }

  const mensaje = `Hola ${nombre}, bienvenido/a`;
  alert(mensaje);

  console.log("Mensaje:", mensaje);
  return mensaje;
}
