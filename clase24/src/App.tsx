import './App.css'
// import Server from './components/Server'
// import Badge from './components/Badge'
// import PlanCard from './components/PlanCard'
import Notificacion from './components/Notificacion'

function App() {
  return (
    <>
      {/* SERVER */}
      {/* <Server serverName='Web principal' status='online'></Server>
    <Server serverName='Base de Datos' status='online'></Server>
    <Server serverName='Api de Pagos' status='offline'></Server> */}

      {/* BADGE */}
      {/* <Badge productName='camiseta' cantidad={0}/>
    <Badge productName='pantalones' cantidad={5}/>
    <Badge productName='abrigo' cantidad={15}/> */}

      {/* PLAN */}
      {/* <PlanCard nombrePlan='Familiar' esPopular={true} />
      <PlanCard nombrePlan='Individual' esPopular={false} /> */}

      {/* NOTIFICATIONS */}
      <Notificacion tipo='exito' mensaje='Usuario creado'/>
      <Notificacion tipo='alerta' mensaje='No hay gasolina'/>
      <Notificacion tipo='error' mensaje='No se pudo guardar en la base de datos'/>
    </>
  )
}

export default App