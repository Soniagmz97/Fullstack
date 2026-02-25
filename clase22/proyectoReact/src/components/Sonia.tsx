import React from 'react'

const Sonia = () => {
    // Datos personales
    const nombre: string = "Sonia"
    const edad: number = 24
    const trabajos: string[] = ["estudiante", "analista de datos"]
    const hobbies:string[] = ["tocar el chelo", "jugar a videojuegos"]
    return (
        <>
            <div>Me llamo {nombre}, tengo {edad} años. Primero he sido {trabajos[0]} y ahora estoy trabajando como {trabajos[1]}</div>
            <div>Hobbies:</div>
            <div>{hobbies[0]} - {hobbies[0]}</div>
        </>
    )
}

export default Sonia