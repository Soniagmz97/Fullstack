import './App.css'
// import Server from './components/Server'
import Badge from './components/Badge'
function App() {
  return (
    <>
      {/* <Server serverName='Web principal' status='online'></Server>
    <Server serverName='Base de Datos' status='online'></Server>
    <Server serverName='Api de Pagos' status='offline'></Server> */}

    <Badge productName='camiseta' cantidad={0}/>
    <Badge productName='pantalones' cantidad={5}/>
    <Badge productName='abrigo' cantidad={15}/>
    </>
  )
}

export default App