let presupuesto
let aumento
let precio

// Clase persona para ingresar cliente
class Personas {
    constructor(nombre, apellido,) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona = new Personas(Personas.nombre, Personas.apellido);

persona.nombre = prompt("Ingrese su Nombre")
while (persona.nombre == "") {
    alert("¡Campo requerido!")
    persona.nombre = prompt("Ingrese su nombre");
}

persona.apellido = prompt("Ingrese su apellido")
while (persona.apellido == "") {
    alert("¡Campo requerido!")
    persona.apellido = prompt("Ingrese su apellido");
};

const nombreCliente = (persona.nombre + " " + persona.apellido);
alert("Gracias por elegirnos " + nombreCliente +
    `
¡A continuacion te haremos algunas preguntas para tu presupuesto!`);

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


// Ingresa el tamaño del vehiculo
vehiculosArray = []
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

/*let vehiculoSeleccionado = parseInt(prompt(`Ingrese el vehiculo a tratar
1- Chico
2- Hatchback
3- Sedan
4 - Suv
5- Pickup`))

console.log(vehiculoSeleccionado)*/
let seleccion = prompt("Quiere realizar un tratamiento? si o no")

while (seleccion != "si" && seleccion != "no") {

    alert("porfavor ingresa si o no")
    seleccion = prompt("hola desa comprar algo si o no")
}

if (seleccion == "si") {
    alert("Tratamiento disponibles")
    let trataSeleccionado = tratArray.map
        ((tratamiento) => tratamiento.id + " - " + tratamiento.name + "  " + tratamiento.precio);

    alert(trataSeleccionado.join("  "));
} else if (seleccion == "no") {
    alert("gracias por venir, hasta pronto")
}

let tratamiento = prompt("Seleccione un tratamiento")

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

let seleccion2

if (seleccion2 == "si") {
    alert("Vehiculos disponibles")
    let vehiculoSeleccionado = vehiculosArray.map
        ((auto) => auto.id + " - " + auto.name1 + "  " + auto.aumento);

    alert(vehiculoSeleccionado.join("  "));
} else if (seleccion2 == "no") {
    alert("gracias por venir, hasta pronto")
}

let auto = prompt("Seleccione el tamaño del vehiculo")

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
            auemnto = 1.35;
            break;

    }

}else{
    alert("no coincide")
}

function presupuestoFinal() {
    presupuesto = alert(precio * aumento);
    console.log(presupuesto)
}
//presupuesto.push({auto, tratamiento})
presupuestoFinal();
