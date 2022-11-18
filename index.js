
let clienteParse = JSON.parse(localStorage.getItem('Personas'));
let message = document.getElementById('welcome');
message.innerHTML += '¡Bienvenido ' + clienteParse[0].nombre + ' comenzemos con el prespuesto!';

//Creamos array de vehiculos//
const vehiculosArray = []
class vehiculo {
    constructor(name1, aumento, id) {
        this.name1 = name1;
        this.aumento = aumento;
        this.id = id
    }
}
const chico = new vehiculo('chico', 1.10, 1)
vehiculosArray.push(chico);
const hatchback = new vehiculo('hatchback', 1.15, 2)
vehiculosArray.push(hatchback);
const sedan = new vehiculo('sedan', 1.20, 3)
vehiculosArray.push(sedan);
const suv = new vehiculo('suv', 1.25, 4)
vehiculosArray.push(suv);
const pickup = new vehiculo('pickup', 1.30, 5)
vehiculosArray.push(pickup);

//Creamos array de tratamientos disponibles//

let tratArray = []
class tratamientos {
    constructor(name, descripcion, precio, id) {
        this.name = name;
        this.descripcion = descripcion;
        this.precio = precio
        this.id = id
    }    
}    

const Acrilico = new tratamientos("Acrilico", "Tratamiento Acrilico de 6 meses", 40000, 1,);
tratArray.push(Acrilico);

const Ceramico3 = new tratamientos("Ceramico3", "Tratamiento Cermico de 3 años", 60000, 2,);
tratArray.push(Ceramico3);

const Ceramico5 = new tratamientos("Ceramico5", "Tratamiento Cermico de 5 años", 80000, 3);
tratArray.push(Ceramico5);

const PPF = new tratamientos("PPF", "PPF completo 10 años de garantia", 100000, 4,);
tratArray.push(PPF);

//Recorrer los array de vehiculos//
let message1 = document.getElementById('tamanosDisponibles')
let tamanosDisponibles = vehiculosArray.map
((vehiculosArray) => vehiculosArray.id +  `  ` + vehiculosArray.name1 + `  ` + vehiculosArray.aumento);
message1.innerHTML += 'Los tamaños de vehiculos disponibles son los siguientes ' + vehiculosArray ;


if (auto == "chico" || auto == "hatchback" || auto == "sedan" || auto == "suv" || auto == "pickup") {
    switch (auto) {
        case "chico":
            aumento = 1.15;
            break;
        case "hatchback":
            aumento = 1.20;
            break;
        case "sedan":
            aumento = 1.25;
            break;
        case "suv":
            aumento = 1.30;
            break;
        case "pickup":
            aumento = 1.35;
            break;
    }
    }else{
        alert("Seleccione opcion valida")
    }


//Recorrer array de tratamientos//
let message2 = document.getElementById('tratDisponible')
let tratDisponible = tratArray.map
((tratArray) => tratArray.id + `  ` +  tratArray.name + `  ` + tratArray.precio);
message2.innerHTML += 'Los tratamientos disponibles son los siguientes ' + tratArray ;

if (tratamiento == "Acrilico" || tratamiento == "Ceramico3" || tratamiento == "Ceramico5" || tratamiento == "PPF") {
    switch (tratamiento) {
        case "Acrilico":
            precio = 40000;
            break;
        case "Ceramico3":
            precio = 60000;
            break;
        case "Ceramico5":
            precio = 80000;
            break;
        case "PPF":
            precio = 100000;
            break;


    }
}


function presupuestoFinal() {
    presupuesto = alert("Gracias por elegirnos  " + clienteParse + ". El costo del tratamiento es de " + "  " + precio * aumento + ". ");
}

presupuestoFinal();