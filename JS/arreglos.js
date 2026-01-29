function runArreglos() {
  console.clear();
  console.log("Arreglos y ciclos");

  // Arreglos separados por editorial (objetos para poder filtrar por género)
  const personajesMarvel = [
    { nombre: "Iron Man", genero: "hombre" },
    { nombre: "Captain America", genero: "hombre" },
    { nombre: "Spider-Man", genero: "hombre" },
    { nombre: "Black Widow", genero: "mujer" },
    { nombre: "Thor", genero: "hombre" },
    { nombre: "Hulk", genero: "hombre" },
  ];

  const personajesDC = [
    { nombre: "Batman", genero: "hombre" },
    { nombre: "Superman", genero: "hombre" },
    { nombre: "Wonder Woman", genero: "mujer" },
    { nombre: "The Flash", genero: "hombre" },
    { nombre: "Aquaman", genero: "hombre" },
    { nombre: "Green Lantern", genero: "hombre" },
  ];

  // -------------------------
  // Helpers
  // -------------------------

  function pedirTexto(mensaje) {
    while (true) {
      const input = prompt(mensaje);
      if (input === null) return null;

      const texto = input.trim();
      if (texto.length > 0) return texto;

      alert("Ingresa un texto válido (no vacío).");
    }
  }

  function pedirNumeroEntero(mensaje) {
    while (true) {
      const input = prompt(mensaje);
      if (input === null) return null;

      const numero = Number(input);
      if (Number.isInteger(numero) && numero >= 0) return numero;

      alert("Ingresa un número entero válido (0 o mayor).");
    }
  }

  function seleccionarEditorial() {
    const op = prompt("Selecciona editorial:\n1) Marvel\n2) DC\n0) Cancelar");

    if (op === null || op === "0") return null;

    if (op === "1") return { nombre: "Marvel", lista: personajesMarvel };
    if (op === "2") return { nombre: "DC", lista: personajesDC };

    return "INVALIDA";
  }

  // -------------------------
  // Recorridos (for / while)
  // -------------------------

  function listarConFor(lista) {
    let salida = "";
    for (let i = 0; i < lista.length; i++) {
      salida += `${i + 1}. ${lista[i].nombre}\n`;
    }
    return salida.trimEnd();
  }

  function listarConWhile(lista) {
    let salida = "";
    let i = 0;
    while (i < lista.length) {
      salida += `${i + 1}. ${lista[i].nombre}\n`;
      i++;
    }
    return salida.trimEnd();
  }

  // -------------------------
  // Filtros
  // -------------------------

  function filtrarPorTextoIncluido(lista, texto) {
    const resultado = [];
    const buscar = texto.toLowerCase();

    for (let i = 0; i < lista.length; i++) {
      if (lista[i].nombre.toLowerCase().includes(buscar)) {
        resultado.push(lista[i]);
      }
    }
    return resultado;
  }

  function filtrarPorGenero(lista, genero) {
    const g = genero.toLowerCase();
    return lista.filter((p) => p.genero === g);
  }

  // -------------------------
  // Menú del módulo
  // -------------------------

  const opcion = prompt(
    "MÓDULO 03 - ARREGLOS Y CICLOS\n" +
      "1) Listar personajes (for)\n" +
      "2) Listar personajes (while)\n" +
      "3) Mostrar N personajes (cantidad)\n" +
      "4) Filtrar por texto incluido\n" +
      "5) Filtrar por género (h/m)\n" +
      "0) Volver"
  );

  if (opcion === null || opcion === "0") {
    console.log("Volver / cancelado.");
    return "Módulo 03: cancelado o volver.";
  }

  // Primero elegimos editorial (Marvel/DC)

  const editorial = seleccionarEditorial();

  if (editorial === null) {
    console.log("Editorial cancelada.");
    return "Módulo 03: selección de editorial cancelada.";
  }

  if (editorial === "INVALIDA") {
    alert("Editorial inválida.");
    return "Módulo 03: editorial inválida.";
  }

  const nombreEditorial = editorial.nombre;
  const lista = editorial.lista;

  console.log("Editorial elegida:", nombreEditorial);
  console.log("Lista base:", lista);

  switch (opcion) {
    case "1": {
      const listado = listarConFor(lista);
      const salida = `Editorial: ${nombreEditorial}\n\nLista (for):\n${listado}`;
      console.log(salida);
      alert("Listado generado. Revisa consola y salida.");
      return salida;
    }

    case "2": {
      const listado = listarConWhile(lista);
      const salida = `Editorial: ${nombreEditorial}\n\nLista (while):\n${listado}`;
      console.log(salida);
      alert("Listado generado. Revisa consola y salida.");
      return salida;
    }

    // cantidad a mostrar

    case "3": {
      const cantidad = pedirNumeroEntero("¿Cuántos personajes mostrar? (ej: 3):");
      if (cantidad === null) return "Filtro cancelado por el usuario.";

      const n = Math.max(0, Math.min(cantidad, lista.length));
      const filtrados = lista.slice(0, n);

      const salida =
        `Editorial: ${nombreEditorial}\n\n` +
        "Filtro: cantidad a mostrar\n" +
        `Cantidad: ${n}\n` +
        "Resultado:\n" +
        (filtrados.length
          ? filtrados.map((p, i) => `${i + 1}. ${p.nombre}`).join("\n")
          : "Sin resultados");

      console.log("Filtrados:", filtrados);
      alert("Filtro aplicado. Revisa consola y salida.");
      return salida;
    }

    case "4": {
      const texto = pedirTexto("Ingresa texto a buscar (ej: man, bat, iron):");
      if (texto === null) return "Filtro cancelado por el usuario.";

      const filtrados = filtrarPorTextoIncluido(lista, texto);

      const salida =
        `Editorial: ${nombreEditorial}\n\n` +
        "Filtro: contiene texto\n" +
        `Texto: "${texto}"\n` +
        "Resultado:\n" +
        (filtrados.length
          ? filtrados.map((p, i) => `${i + 1}. ${p.nombre}`).join("\n")
          : "Sin resultados");

      console.log("Filtrados:", filtrados);
      alert("Filtro aplicado. Revisa consola y salida.");
      return salida;
    }

    case "5": {
      const inputGen = pedirTexto("Género (h/m):");
      if (inputGen === null) return "Filtro cancelado por el usuario.";

      const g = inputGen.trim().toLowerCase();
      const genero =
        g === "h" || g === "hombre"
          ? "hombre"
          : g === "m" || g === "mujer"
            ? "mujer"
            : null;

      if (!genero) {
        alert('Género inválido. Usa "h" o "m".');
        return "Módulo 03: género inválido.";
      }

      const filtrados = filtrarPorGenero(lista, genero);

      const salida =
        `Editorial: ${nombreEditorial}\n\n` +
        "Filtro: género\n" +
        `Género: ${genero}\n` +
        "Resultado:\n" +
        (filtrados.length
          ? filtrados.map((p, i) => `${i + 1}. ${p.nombre}`).join("\n")
          : "Sin resultados");

      console.log("Filtrados:", filtrados);
      alert("Filtro aplicado. Revisa consola y salida.");
      return salida;
    }

    default:
      alert("Opción inválida.");
      console.log("Opción inválida:", opcion);
      return "Módulo 03: opción inválida.";
  }
}