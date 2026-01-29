function runCalculadora() {
  console.clear();
  console.log("Calculadora");

  // -------------------------
  // Validaciones
  // -------------------------

  function pedirNumero(mensaje) {
    while (true) {
      const input = prompt(mensaje);

      if (input === null) return null; // cancelado
      const numero = Number(input);

      if (!Number.isNaN(numero)) return numero;

      alert("Ingresa un número válido.");
    }
  }

  function pedirOperacion() {
    const op = prompt(
      "Elige una operación:\n1) Suma\n2) Resta\n3) Multiplicación\n4) División"
    );

    if (op === null) return null;

    const opcionesValidas = ["1", "2", "3", "4"];
    if (!opcionesValidas.includes(op)) return "INVALIDA";

    return op;
  }

  // -------------------------
  // Operaciones (funciones)
  // -------------------------

  function sumar(a, b) {
    return a + b;
  }

  function restar(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }

  function dividir(a, b) {
    if (b === 0) return null; // validación división por 0
    return a / b;
  }

  // -------------------------
  // Flujo principal
  // -------------------------

  const a = pedirNumero("Ingresa el primer número:");
  if (a === null) {
    console.log("Cancelado en el primer número.");
    return "Calculadora: cancelado por el usuario.";
  }

  const b = pedirNumero("Ingresa el segundo número:");
  if (b === null) {
    console.log("Cancelado en el segundo número.");
    return "Calculadora: cancelado por el usuario.";
  }

  const op = pedirOperacion();
  if (op === null) {
    console.log("Cancelado en selección de operación.");
    return "Calculadora: cancelado por el usuario.";
  }

  if (op === "INVALIDA") {
    alert("Opción inválida.");
    console.log("Opción inválida en operación.");
    return "Calculadora: opción inválida.";
  }

  let nombreOp = "";
  let resultado;

  // Usamos switch para estructuras de control

  switch (op) {
    case "1":
      nombreOp = "Suma";
      resultado = sumar(a, b);
      break;

    case "2":
      nombreOp = "Resta";
      resultado = restar(a, b);
      break;

    case "3":
      nombreOp = "Multiplicación";
      resultado = multiplicar(a, b);
      break;

    case "4":
      nombreOp = "División";
      resultado = dividir(a, b);
      break;
  }

  if (op === "4" && resultado === null) {
    alert("No se puede dividir por 0.");
    console.log(`División inválida: ${a} / ${b}`);
    return `Calculadora:\n- Operación: División\n- Error: No se puede dividir por 0\n- Números: ${a} y ${b}`;
  }

  // Mostrar por consola y por alert
  alert(`${nombreOp} realizada.\nResultado: ${resultado}`);

  console.log("Operación:", nombreOp);
  console.log("Número 1:", a);
  console.log("Número 2:", b);
  console.log("Resultado:", resultado);

  // Salida para el HTML (lo que devuelve el módulo)

  return (
    "Calculadora:\n" +
    `- Operación: ${nombreOp}\n` +
    `- Número 1: ${a}\n` +
    `- Número 2: ${b}\n` +
    `- Resultado: ${resultado}`
  );
}
