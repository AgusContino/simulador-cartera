/* Clase constructora de objetos para cada activo */
class Activo {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

/* Ciclo para ingresar cada activo de la cartera */

let cantidadActivos = parseInt(prompt("ingrese el numero de activos que posee"))

const cartera = {}

for (let i = 0; i < cantidadActivos; i++) {

    let nombreActivo = prompt("ingrese nombre de activo")
    let valorActivo = parseInt(prompt("ingrese valor del activo"))

    cartera["activo" + i] = new Activo(nombreActivo, valorActivo)

}


/* Condicional para mostrar composicion de cartera o porcentajes de la misma */

let consultaPorcentajes = prompt("Se han guardado los activos. ¿Desea conocer los procentajes? ingrese si para continuar o no para salir")

let sumaCartera = 0

if (consultaPorcentajes == "si") {

    /* Ciclos para sumar el total de valores y calcular porcentajes */

    for (let i = 0; i < cantidadActivos; i++) {

        sumaCartera = sumaCartera + cartera["activo" + i].valor

    }

    for (let i = 0; i < cantidadActivos; i++) {

        cartera["activo" + i].porcentaje = (cartera["activo" + i].valor * 100 / sumaCartera).toFixed(2)

        console.log(cartera["activo" + i].nombre + ": %" + cartera["activo" + i].porcentaje)

    }
    alert("se muestran procentajes de la cartera por consola")

} else {

    for (let i = 0; i < cantidadActivos; i++) {

        console.log(cartera["activo" + i].nombre + " $" + cartera["activo" + i].valor)

    }
    alert("se muestra la composicion de cartera por consola")

}

/* Funcion para quitar activos de la cartera */

function quitarActivo(nombreActivo) {

    for (let i = 0; i < cantidadActivos; i++) {

        if (cartera["activo" + i].nombre === nombreActivo) {

            delete cartera["activo" + i]
            cantidadActivos = cantidadActivos - 1
        }

    }

}

/* Consulta para eliminar activos o no modificar cartera */

let consultaEliminar = prompt("Si desea eliminar un activo, ingrese su nombre. De lo contraro ingrese no")
if (consultaEliminar != "no") {

    quitarActivo(consultaEliminar)

    for (let i = 0; i < cantidadActivos; i++) {

        console.log(cartera["activo" + i].nombre + " $" + cartera["activo" + i].valor)

    }
    alert("se muestra la nueva composicion de cartera por consola")

}






