const saludar = () => {
  let nombre;

  do {
    nombre = prompt("Gym New Life, ingrese su nombre");
  } while (nombre === "" || !isNaN(nombre));
  alert(`Hola ${nombre}`);
  console.log(`Hola ${nombre}`);
};
const verActividades = () => {
  let auxAct = parseInt(
    prompt(`¿Que actividad queres realizar? Seleccione el nº:\n 1) Crossfit\n 2) Zumba\n 3) Localizada\n 4) Sala de aparatos  `)
    );
    while( auxAct>4 || auxAct <1 ){
      auxAct = parseInt(
        prompt(`¿Que actividad queres realizar? Seleccione el nº:\n 1) Crossfit\n 2) Zumba\n 3) Localizada\n 4) Sala de aparatos  `)
        );
    }
    console.log(auxAct);
    
    let auxAct2;
    switch (auxAct) {
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
  if (actividad == "Crossfit") {
    return 2500;
  } else if ( actividad == "Zumba"){
    return 1400;
  } else if ( actividad == "Localizada") {
    return 1800;
  } else {
    return 2000;
  }
};


saludar ();
let actSeleccionada = verActividades ();
let cuota = valorCuota (actSeleccionada);
alert( `El precio mensual de su clase es $ ${cuota}`); 


