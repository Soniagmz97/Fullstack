"use strict"

const smartphone = {
    model: `IPhone17`,
    user: `Sonia`,
    inbox: []
}

// Añadir notificaciones
smartphone.inbox.push(`WhatsApp mamá`)
smartphone.inbox.push(`Alerta de seguridad`)
smartphone.inbox.push(`YouTube: nuevo vídeo`)

// Gestionar alertas
// Eliminar el primer elemento del array
smartphone.inbox.shift()

// Resumen del estado
// Número de notificaciones que quedan en la bandeja
let totalPendings = smartphone.inbox.length

// Claves objeto smartphone
console.log(Object.keys(smartphone))

// Frase
console.log(`A ${smartphone.user} le quedan ${totalPendings} notifiaciones`)