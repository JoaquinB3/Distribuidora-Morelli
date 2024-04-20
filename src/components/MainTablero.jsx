import React from 'react'
import { tableros } from '../data/data'
import TableroGestion from './TableroDeGestion/TableroGestion'

export default function MainTablero() {
  return (
    <div className='containerTableros'>
          {
            tableros.map(tablero=>(
              <TableroGestion key={tablero.name} name={tablero.name} numero={tablero.numero} fechaRegistro={tablero.fechaRegisto} color={tablero.color}/>
            ))  
          }
    </div>
  )
}
