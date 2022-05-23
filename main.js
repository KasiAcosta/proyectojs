//Declaraciones
let divClases = document.getElementById("clases")
let formulario = document.getElementById('form')
let divConfirm = document.getElementById("confirm")
let nuevaSusc = []
let btnConfirm = document.querySelector('#btnConfirm')

// Obj
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

class Suscripcion{
  constructor(nombre, apellido, actividad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.actividad = actividad;
  }
}

//eventos
formulario.addEventListener('submit', (event) =>{
  event.preventDefault()
  let datosInsc = new FormData(event.target)
  const nuevoAlumno = new Suscripcion(datosInsc.get('nombre'), datosInsc.get('apellido'), datosInsc.get('actividad'))
  console.log(nuevoAlumno)
  nuevaSusc.push(nuevoAlumno)
  localStorage.setItem('NuevaSusc', JSON.stringify(nuevaSusc))
  
  formulario.reset()
})
//Op. ternario
localStorage.getItem('NuevaSusc')?nuevaSusc = JSON.parse(localStorage.getItem('NuevaSusc')):localStorage.setItem('NuevaSusc', JSON.stringify(nuevaSusc))

//Funciones (se aplico desestruc.)
actividad.forEach(clases => {
  const {id, nombre, duracion, frecuenciaSemanal, precio} = clases
  divClases.innerHTML +=`
  
  <div id=${id} class="card-body clas">
    <h5 class="card-title">Nombre: ${nombre}</h5>
    <p> Duracion: ${duracion} </p>
    <p> Frecuencia Semanal: ${frecuenciaSemanal} </p>
    <p> Precio: $${precio} </p>
  </div>
  `
})

function confirmacion() {
nuevaSusc.forEach(confirm => {
  const {nombre, apellido, actividad} = confirm
  divConfirm.innerHTML +=`
  
  <div class="card clasConfirm" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Suscripcion Confirmada</h5>
    <p> Nombre: ${nombre} </p> 
    <p> Apellido: ${apellido} </p>
    <p> Se suscribio a : ${actividad} </p>
  </div>
</div>
  `
})
}
btnConfirm.addEventListener('click', () => {
  Swal.fire(
    'Bienvenid@',
    'Suscripcion completada',
    'success'
  )
})

confirmacion();
//ejemplo Spread
console.log("Listado completo de actividades", ...actividad, )


