interface MensajeProps {
    mensaje:string,
    tipo: 'exito' | 'alerta' | 'error'
}

const Notificacion = (props: MensajeProps) => {
    const styles = {
        exito: 'bg-green-100 border-green-500text-green-700',
        alerta: 'bg-yellow-100 border-yellow-500text-yellow-700',
        error: 'bg-red-100 border-red-500text-red-700',
    }
  return (
    <div className={`border-l-4 p-4 my-3 rounded-md shadow-sm ${styles[props.tipo]}`}>
      <p className='font-bold capitalize'>{props.tipo}</p>
      <p className='text-sm'>{props.mensaje}</p>
    </div>
  )
}

export default Notificacion