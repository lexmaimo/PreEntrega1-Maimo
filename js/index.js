// simulador de reservas de hotel
let valorTotal = 0
let habitaciones = ""
let cantidadHabitaciones = 0

function saludo () {
    do {
        const nombre = prompt(`¡Bienvenidos a Hygge Hotel & Spa - Adults Only! Por favor, ingresá tu nombre:`)
        userName = nombre
    } while (userName.includes(`.`, `-`, `!`, `#`, `$`, `%`, `&`, `*`, `+`, `-`, `/`, `=`, `?`, `^`, `_`,  `{`, `|`, `}`, `~`) || !isNaN(userName) || userName == "" || userName == " ")
}

function validarPax() {
    do {
        let cantPasajeros = prompt(`¿Cuántas personas van a alojarse? Recordá que nuestro complejo es sólo para adultos.`)
        userPax = parseInt(cantPasajeros)
    } while (isNaN(userPax) || userPax == "" || userPax == " " || userPax < 1)
}

function validarNoches() {
    do {
        let cantNoches = prompt(`Por favor, ingresá la cantidad de noches que querés alojarte:`)
        userNoches = parseInt(cantNoches)
    } while (isNaN(userNoches) || userNoches == "" || userNoches == " " || userNoches < 1)
}

function checkIn() {
    do {
        let input = prompt(`Ingresá el día de check-in [1-31]`)
        dia = parseInt(input)
    } while (isNaN(dia) || !(dia >= 1 && dia <= 31))

    do {
        let input2 = prompt(`Ingresá el mes de check-in [1-12]`)
        mes = parseInt(input2)
    } while (isNaN(mes) || !(mes >= 1 && mes <= 12))

    do {
        let input3 = prompt(`Ingresá el año de check-in [2023-2024]`)
        anio = parseInt(input3)
    } while (isNaN(anio) || !(anio >= 2023 && anio <= 2024))

    alert(`Tu fecha de ingreso es el ${dia}/${mes}/${anio}.`)
}

function checkOut() {
    do {
        let input4 = prompt(`Ingresá el día de check-out [1-31]`)
        dia2 = parseInt(input4)
    } while (isNaN(dia2) || !(dia2 >= 1 && dia2 <= 31))
    
    do {
        let input5 = prompt(`Ingresá el mes de check-out [1-12]`)
        mes2 = parseInt(input5)
    } while (isNaN(mes2) || !(mes2 >= 1 && mes2 <= 12))
    
    do {
        let input6 = prompt(`Ingresá el año de check-out [2023-2024]`)
        anio2 = parseInt(input6)
    } while (isNaN(anio2) || !(anio2 >= 2023 && anio2 <= 2024))
    
    alert(`Tu fecha de egreso es el ${dia2}/${mes2}/${anio2}.`)
}

function agregarHabitacion() {
    let habitacion = prompt(`¿En qué habitación te gustaría hospedarte? 
    (ingresá el número correspondiente)
        [1] Doble Standard
        [2] Doble Superior
        [3] Suite Junior
        [4] Suite Deluxe`)

    switch (habitacion) {
        case "1":
            habitaciones = habitaciones + "Doble Standard \n"
            cantidadHabitaciones++
            valorTotal += (userNoches*20000)
            alert(`
            Habitación Doble Standard:
            - Costo por noche: $20.000
            
            - Total de habitaciones elegidas de esta categoría: ${cantidadHabitaciones}
            - Subtotal: $${valorTotal}`)

            preguntaOtraHabitacion()

            break;
        case "2":
            habitaciones = habitaciones + "Doble Superior \n"
            cantidadHabitaciones++
            valorTotal += (userNoches*25000)
            alert(`
            Doble Superior:
            - Costo por noche: $25.000
            
            - Total de habitaciones elegidas de esta categoría: ${cantidadHabitaciones}
            - Subtotal: $${valorTotal}`)

            preguntaOtraHabitacion()

            break;
        case "3":
            habitaciones = habitaciones + "Suite Junior \n"
            cantidadHabitaciones++
            valorTotal += (userNoches*30000)
            alert(`
            Suite Junior:
            - Costo por noche: $30.000

            - Total de habitaciones elegidas de esta categoría: ${cantidadHabitaciones}
            - Subtotal: $${valorTotal}`)

            preguntaOtraHabitacion()

            break;
        case "4":
            habitaciones = habitaciones + "Suite Deluxe \n"
            cantidadHabitaciones++
            valorTotal += (userNoches*35000)
            alert(`
            Suite Deluxe:
            - Costo por noche: $35.000
            
            - Total de habitaciones elegidas de esta categoría: ${cantidadHabitaciones}
            - Subtotal: $${valorTotal}`)

            preguntaOtraHabitacion()

            break;

        default:
            alert("Ingresá un número correcto.")
            agregarHabitacion()
            break;
    }
}

function preguntaOtraHabitacion() {
    let otraHabitacion = prompt(`¿Te gustaría agregar otra habitación?
        [1] SI
        [2] NO`)
    while (otraHabitacion !== "1" && otraHabitacion !== "2") {
        otraHabitacion = prompt(`La opción elegida no es correcta. ¿Te gustaría agregar otra habitación?
        [1] SI
        [2] NO`)
    }
    if (otraHabitacion == "1") {
        agregarHabitacion();
    } else if (otraHabitacion == "2") {
        alert(`Muchas gracias, a continuación podrás ver lo que llevás elegido...`)
    } else {
        alert(`La opción elegida no es correcta.`)
    }
}

function habitacionesElegidas() {
    if (cantidadHabitaciones != 0) {
        alert(`
        Estas son tus habitaciones seleccionadas:
        
        ${habitaciones}

        Cantidad de pasajeros: ${userPax}
        Cantidad de habitaciones: ${cantidadHabitaciones}
        El total es: $${valorTotal}`)
    }
}

function datosReserva() {
    alert(`A continuación, vamos a pedirte tus datos para cargar la reserva.`)
    do {
        const apellido = prompt(`${userName}, por favor, ingresá tu apellido`)
        userLastname = apellido
    } while (userLastname.includes(`.`, `-`, `!`, `#`, `$`, `%`, `&`, `*`, `+`, `-`, `/`, `=`, `?`, `^`, `_`,  `{`, `|`, `}`, `~`) || !isNaN(userLastname) || userLastname == "" || userLastname ==" ")

    do {
        let tel = prompt(`Ingresá tu número de teléfono sin guiones ni espacios`)
        userTel = parseInt(tel)
    } while (isNaN(userTel) || userTel == "" || userTel == " ")

    do {
        let email = prompt(`Ingresá tu email [ejemplo@ejemplo.com]`)
        userEmail = email
    } while (!userEmail.includes(`@`, `.`) || userEmail == "" || userEmail == " ")
}

function confirmacionReserva() {
    confirmacionReserva = alert(`Los datos de tu reserva son los siguientes, y te llegarán también a tu email:

    -Nombre del titular: ${userName}
    -Apellido del titular: ${userLastname}
    -Número de telefono: ${userTel}
    -Correo electrónico: ${userEmail}

    -Categorías de habitaciones reservadas: ${habitaciones}
    -Cantidad de pasajeros adultos: ${userPax}
    -Cantidad de habitaciones: ${cantidadHabitaciones}

    -Total de la reserva: $${valorTotal}`)
    
    mensajePagoAnticipado = alert(`
    Para confirmar tu reserva, deberás abonar el 30% del total a modo de seña. Esto podés realizarlo vía transferencia bancaria.

    Recibirás los datos de la cuenta a la que transferir en tu correo electrónico.`)
    
    mensajeFinal = alert(`
    Muchas gracias por tu reserva!

    ¡Te esperamos pronto en Hygge Hotel & Spa - Adults Only!`)
}

//saludo
saludo()

//pedir datos principales
validarPax()
if (userPax > 2) {
    alert(`Todas nuestras habitaciones son dobles, por lo que vas a necesitar reservar más de una.`)
}
validarNoches()

//pedir los datos del check-in
alert(`A continuación, te pediremos la fecha del check-in.`)
checkIn()

//pedir los datos del check-out
alert(`Ahora te pediremos la fecha del check-out.`)
checkOut()

//elegir habitación
agregarHabitacion()

//información de habitaciones elegidas
habitacionesElegidas()

//pedido de datos de reserva
datosReserva()

//pre-confirmación de reserva
confirmacionReserva()