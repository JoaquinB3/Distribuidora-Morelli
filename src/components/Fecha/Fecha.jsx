import React from 'react'
import "./_fecha.scss"


export default function Fecha({fecha, hora}) {
  return (
    <div className='containerFechaHora'>
        <span className='fechaHoy'>{fecha}</span>
        <span className='horaHoy'>{hora}</span>
    </div>
)
}
