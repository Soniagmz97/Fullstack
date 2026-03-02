import './Badge.css'

// Interface
interface ColorProps {
    productName:string,
    cantidad:number
}

const Badge = (props: ColorProps) => {
    let claseProps = ''
    let claseText = ''
    // Determinar dinamicamente la clase css
    if (props.cantidad === 0){
        claseProps = 'agotado'
    }
    else if (props.cantidad >= 1 && props.cantidad <= 10){
        claseProps = 'critico'
        claseText = '¡Útimas unidades!'
    }
    else{
        claseProps = 'normal'
    }
  return (
    <div className={`badge-card ${claseProps}`}>
        <h3>{props.productName}</h3>
        <span className='indicator'>{claseText}</span>
    </div>
  )
}

export default Badge