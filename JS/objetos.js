function runObjetos() {
  console.clear();
  console.log("Objetos");

  // Objeto con propiedades y método

  const app = {
    nombre: "Catálogo de Personajes",
    version: "1.0",
    autor: "Andres",
    info() {
      return `${this.nombre} v${this.version} - ${this.autor}`;
    }
  };

  // PERSONAJES

  const personajes = [

    // Marvel
    { nombre: "Iron Man", editorial: "Marvel" },
    { nombre: "Captain America", editorial: "Marvel" },
    { nombre: "Spider-Man", editorial: "Marvel" },
    { nombre: "Black Widow", editorial: "Marvel" },
    { nombre: "Thor", editorial: "Marvel" },
    { nombre: "Hulk", editorial: "Marvel" },

    // DC
    { nombre: "Batman", editorial: "DC" },
    { nombre: "Superman", editorial: "DC" },
    { nombre: "Wonder Woman", editorial: "DC" },
    { nombre: "The Flash", editorial: "DC" },
    { nombre: "Aquaman", editorial: "DC" },
    { nombre: "Green Lantern", editorial: "DC" }
  ];

  function pedirEditorial() {
    const op = prompt(
      "MÓDULO 04 - OBJETOS\n" +
      "Filtrar por editorial:\n" +
      "1) Marvel\n" +
      "2) DC\n" +
      "3) Todas\n" +
      "0) Volver"
    );

    if (op === null || op === "0") return null;
    if (op === "1") return "Marvel";
    if (op === "2") return "DC";
    if (op === "3") return "Todas";
    return "INVALIDA";
  }

  const editorial = pedirEditorial();

  if (editorial === null) {
    console.log("Cancelado/volver.");
    return "Módulo 04: cancelado o volver.";
  }

  if (editorial === "INVALIDA") {
    alert("Opción inválida.");
    return "Módulo 04: opción inválida.";
  }

  // Filtrar (condicional)
  const listaFinal =
    editorial === "Todas"
      ? personajes
      : personajes.filter(p => p.editorial === editorial);

  // Mostrar en consola con forEach

  console.log("", app.info());
  console.log("Listado (forEach):");
  listaFinal.forEach((p, i) => {
    console.log(`${i + 1}. ${p.nombre} - ${p.editorial}`);
  });

  // Transformar con map

  const nombres = listaFinal.map(p => p.nombre);

  // Salida para el HTML

  const salida =
    `${app.info()}\n\n` +
    `Editorial seleccionada: ${editorial}\n` +
    `Cantidad: ${listaFinal.length}\n\n` +
    "Personajes:\n" +
    (listaFinal.length
      ? listaFinal.map((p, i) => `${i + 1}. ${p.nombre} (${p.editorial})`).join("\n")
      : "Sin resultados") +
    "\n\n" +
    "Nombres (map):\n" +
    (nombres.length ? nombres.join(", ") : "Sin resultados");

  alert("Revisa consola y salida.");
  return salida;
}
