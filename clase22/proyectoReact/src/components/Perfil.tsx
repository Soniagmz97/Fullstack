import './Perfil.css'

const Perfil = () => {
    // Todos los datos
    const nameUser:string = 'Sonia Gómez'
    const proffession:string = 'Desarrolladora'
    const completedModules:number = 3
    const isActive:boolean = true
  return (
    <div className='card-profile'>
        <h2 className="name">{nameUser}</h2>
        <p className="proffession">{proffession}</p>

        <p>Modulos restantes para graduarse: {10 - completedModules}</p>
        {isActive ?  <span className='tag-state'>En linea</span> : null}
    </div>
  )
}

export default Perfil