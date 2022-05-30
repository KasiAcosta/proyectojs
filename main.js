//DOM
let divClases = document.getElementById("clases");
let formulario = document.getElementById("form");
let divConfirm = document.getElementById("confirm");
let btnConfirm = document.querySelector("#btnConfirm");

//Variable
let nuevaSusc = []

//Asincronismos
fetch("./datos.json")
  .then((response) => response.json())
  .then((actividad) => {
    actividad.forEach((clases) => {
      divClases.innerHTML += `
     <div class="panel panel-danger">
        <div class="panel-heading">
          <h3 class="panel-title">${clases.nombre}</h3>
        </div>
        <div class="panel-body">
          <img style="widt:200px;" src="${clases.imagen}">
          <p> ${clases.frecuenciaSemanal} </p>
          <p>$${clases.precio} </p>
        </div>
      </div>
    `;
    });
  });

//Interacción con el formulario suscripcion
class Suscripcion {
  constructor(nombre, apellido, actividad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.actividad = actividad;
  }
}
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let datosInsc = new FormData(event.target);
  const nuevoAlumno = new Suscripcion(
    datosInsc.get("nombre"),
    datosInsc.get("apellido"),
    datosInsc.get("actividad")
  );
  nuevaSusc.push(nuevoAlumno);
  localStorage.setItem("nuevaSusc", JSON.stringify(nuevaSusc));
  formulario.reset();
});
localStorage.getItem("nuevaSusc") ?
  nuevaSusc = JSON.parse(localStorage.getItem("nuevaSusc")) :
  localStorage.setItem("nuevaSusc", JSON.stringify(nuevaSusc));

//Funcion
function confirmacion() {
  nuevaSusc.forEach((confirm) => {
    const {
      nombre,
      apellido,
      actividad
    } = confirm;
    divConfirm.innerHTML = `
      <div class="panel panel-danger">
        <div class="panel-heading">
          <h4 class="panel-title">Nuevo Alumno</h4>
        </div>
      <div class="panel-body">
          <p> Nombre: ${nombre} </p> 
          <p> Apellido: ${apellido} </p>
          <p> Se suscribio a : ${actividad} </p>
        </div>
      </div>
    `;
  });
}
btnConfirm.addEventListener("click", () => {
  Swal.fire("Bienvenid@", "Suscripcion completada", "success");
});
//llamado a la funcion
confirmacion();
