import './Noticias.css'

interface TipoNoticia {
  titulo:string,
  resumen:string,
  parrafoIntroductorio:string,
  parrafoExplicativo:string
}

const Noticias = (props: TipoNoticia) => {
  return (
    <>
      <article className='body-article Article'>
        <div className="Article-container Container">
          <h1 className='Container-title'>{props.titulo}</h1>
          <h2 className="container-summary">{props.resumen}</h2>
          <div className="container-subcontainer Subcontainer">
            <p className="subcontainer-paragraph">{props.parrafoIntroductorio}</p>
            <p className="subcontainer-paragraph">{props.parrafoExplicativo}</p>
          </div>
        </div>
      </article>
    </>
  )
}

export default Noticias