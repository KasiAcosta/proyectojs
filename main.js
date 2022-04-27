const saludar = () => {
  let nombre;

  do {
    nombre = prompt("Gym New Life, ingrese su nombre");
  } while(nombre === "" || !isNaN(nombre));
  alert(`Hola ${nombre}`);
  console.log(`Hola ${nombre}`);
};
const verActividades = () => {
  let gymAct = parseInt(prompt(`¿Que actividad queres realizar? Seleccione el nº:\n 1) Crossfit\n 2) Zumba\n 3) Localizada\n 4) Sala de aparatos  `));
    while( gymAct>4 || gymAct <1){
      gymAct = parseInt(
        prompt(`¿Que actividad queres realizar? Seleccione el nº:\n 1) Crossfit\n 2) Zumba\n 3) Localizada\n 4) Sala de aparatos  `)
        );
    }
    
    let auxAct2;
    switch(gymAct) {
      case 1:
        auxAct2 = "Crossfit"
        break
        case 2: 
        auxAct2 = "Zumba"
        break
        case 3:
          auxAct2 = " Localizada"
        break
        case 4: 
        auxAct2: "Sala de aparatos"
        break
    }
    return auxAct2;
};

const valorCuota = (actividad) => {
  if(actividad == "Crossfit") {
    return 2500;
  } else if ( actividad == "Zumba"){
    return 1400;
  } else if ( actividad == "Localizada") {
    return 1800;
  } else {
    return 2000;
  }
};

saludar();
let actSeleccionada = verActividades ();
let cuota = valorCuota (actSeleccionada);
alert( `El precio mensual de su clase es $ ${cuota}`); 
/*
class Actividades{
  constructor (nombre, duracion, frecuenciaSemanal, profesor) {
  this.nombre = nombre
  this.duracion = duracion
  this.frecuenciaSemanal = frecuenciaSemanal
  this.profesor = profesor
}
}
const actividad1 = new Actividades("Crossfit", "libre", "libre", "Fernando")
const actividad2 = new Actividades("Zumba", "60min", "3 veces por semana", "Lorena" )
const actividad3 = new Actividades("Localizada", "60min", "3 veces por semana", "Gimena" )
const actividad4 = new Actividades("Sala de aparatos", "libre", "libre", "Jorge" )
const actividad5 = new Actividades(prompt("nombre actividad"), prompt("Ingrese duracion"), prompt("Ingrese frecuencia semanal"), prompt("Ingrese nombre de profesor") )

let array = [actividad1, actividad2, actividad3, actividad4]

for(let i = 0; i < array.length; i++){
 console.log(array[i])
}*/

let alumnos = ["Juan Acosta", "Sofia Lopez", "Jorge Perez", "Lalo Landa", "Samuel Rodriguez" ]

alumnos.push(prompt("Indica nombre y apellido para confirmar su inscripcion"))

for( let i = 0; i < alumnos.length; i++)[
  console.log(alumnos[i])
]
console.log("Listado de alumnos")
console.log(alumnos.join("\n"))