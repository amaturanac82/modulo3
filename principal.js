function setOutput(texto) {
  document.getElementById("output").textContent = texto;
}

document.getElementById("btn01").addEventListener("click", () => {
  setOutput(runSaludo());
});

document.getElementById("btn02").addEventListener("click", () => {
  setOutput(runCalculadora());
});

document.getElementById("btn03").addEventListener("click", () => {
  setOutput(runArreglos());
});

document.getElementById("btn04").addEventListener("click", () => {
  setOutput(runObjetos());
});

document.getElementById("btnClear").addEventListener("click", () => {
  console.clear();
  setOutput("Salida limpia. Presiona un botón para ejecutar un módulo.");
});
