let divClases = document.getElementById("clases")
let formulario = document.getElementById('form')
let alumnoNuevo = []
let divConfirm = document.getElementById("confirm")

class Actividades {
  constructor(id, nombre, duracion, frecuenciaSemanal, precio) {
  this.id = id 
  this.nombre = nombre
  this.duracion = duracion
  this.frecuenciaSemanal = frecuenciaSemanal
  this.precio = precio}
}
const actividad1 = new Actividades("1", "crossfit", "libre", "libre", "2500")
const actividad2 = new Actividades("2", "zumba", "60min", "3 veces por semana", "2000" )
const actividad3 = new Actividades("3", "localizada", "60min", "3 veces por semana", "2300" )
const actividad4 = new Actividades("4", "sala de aparatos", "libre", "libre", "1900" )

let actividad = [actividad1, actividad2, actividad3, actividad4]

actividad.forEach(clases => {
  divClases.innerHTML +=`
  
  <div class="card" "clas" "row conteiner" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">Nombre: ${clases.nombre}</h5>
    <p class="card-text"><p> Duracion: ${clases.duracion} </p>
    <p> Frecuencia Semanal: ${clases.frecuenciaSemanal} </p>
    <p> Precio: $${clases.precio} </p>
  </div>
</div>
  `
})

formulario.addEventListener('submit', (event) =>{
  event.preventDefault()
  let nombre = document.getElementById('formNombre').value
  let apellido = document.getElementById('formApellido').value
  let seleccion = document.getElementById('actSelecionada').value
  let alumnos = {nombre: nombre, apellido: apellido, seleccion: seleccion}
  alumnoNuevo.push(alumnos)
  console.log(alumnoNuevo)
  
})
alumnoNuevo.forEach(inscripcion => {
  divConfirm.innerHTML += `
  <div class="card" "row conteiner" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">Nombre: ${inscripcion.nombre}</h5>
    <p class="card-text"><p> Duracion: ${inscripcion.apellido} </p>
    <p> Frecuencia Semanal: ${inscripcion.seleccion} </p>
  </div>
</div>
  `
})