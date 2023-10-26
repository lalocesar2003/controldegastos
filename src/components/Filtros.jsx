import {useState,useEffect} from 'react'

const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className='campo'>
                <label>Filtrar Gatos</label>
                <select
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
                >
                    
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">comida</option>
            <option value="casa">casa</option>
            <option value="gastos">gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>


                </select>
            </div>
        </form>
        </div>
  )
}

export default Filtros