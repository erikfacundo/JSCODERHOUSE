// Clase persona para ingresar cliente
class Personas {
    constructor(nombre, apellido, ) {
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

const tratArray = []
class tratamientos {
    constructor(tratamiento, descripcion, precio, id) {
        this.tratamiento = tratamiento;
        this.descripcion = descripcion;
        this.precio = precio
        this.id = id
    }
}

const Acrilico = new tratamientos(
    "Acrilico",
    "Tratamiento Acrilico de 6 meses",
    40000,
    1,
);
tratArray.push(Acrilico)
const Ceramico3 = new tratamientos(
    "Ceramico3",
    "Tratamiento Cermico de 3 años",
    60000,
    2,
);
tratArray.push(Ceramico3)
const Ceramico5 = new tratamientos(
    "Ceramico5",
    "Tratamiento Cermico de 5 años",
    80000,
    3,
);
tratArray.push(Ceramico5)
const PPF = new tratamientos(
    "PPF",
    "PPF completo 10 años de garantia",
    100000,
    4,
);
tratArray.push(PPF)

// Seleccion del tratamiento

const selectTratamiento = parseInt(prompt(nombreCliente + `Seleccione un tratamiento
1- Acrilico
2- Ceramico 3 años
3- Ceramico 5 años
4- PPF`));
alert("Usted selcciono " + selectTratamiento);

// Ingresa el tamaño del vehiculo

let vehiculosArray = []

class vehiculo {
    constructor(nombre, aumento, id) {
        this.nombre = nombre;
        this.aumento = aumento;
        this.id = id
    }
}
const chico = new vehiculo('chico', 10, 1)
vehiculosArray.push(chico);
const hatchback = new vehiculo('hatchback', 15, 2)
vehiculosArray.push(hatchback);
const sedan = new vehiculo('sedan', 20, 3)
vehiculosArray.push(sedan);
const suv = new vehiculo('suv', 25, 4)
vehiculosArray.push(suv);
const pickup = new vehiculo('pickup', 30, 5)
vehiculosArray.push(pickup);

const vehiculoSeleccionado = parseInt(prompt(`Ingresa el tamaño del vehiculo
    1 - chico
    2 - hatchback
    3 - sedan
    4 - suv
    5 - pickup
    `))

let flag;
do {
    function presupuestoFinal() {
        if (selectTratamiento == 1 && vehiculoSeleccionado == 1) {
            alert("El costo del servicio seleccionado es: " + selectTratamiento.Acrilico.precio * vehiculoSeleccionado.chico.aumento)
        }
        let mensaje = prompt(`¡Gracias por elegirnos  , ` + persona, ` !`);
    }
} while (flag == "SI") {

}