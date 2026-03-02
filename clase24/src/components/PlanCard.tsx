import './PlanCard.css'

interface PlanProps {
    nombrePlan:string,
    esPopular:boolean
}

const PlanCard = (props: PlanProps) => {
    let classPlan = ''

    if (props.esPopular) {
        classPlan = 'destacado'
    }
  return (
    <div className={`plan-card ${classPlan}`}>
        <h3>{props.nombrePlan}</h3>
    </div>
  )
}

export default PlanCard