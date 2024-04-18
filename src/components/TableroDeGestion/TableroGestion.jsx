import React from 'react'
import "../TableroDeGestion/_tableroGestion.scss"

export default function TableroGestion({name,numero,fechaRegistro,color}) {

    const tableStyle = {
        backgroundColor: color
    }
  return (
    <div className='tablero' style={tableStyle}>
        <h2 className='nameTablero'>{name}</h2>
        <span className='numeroTablero'>{numero}</span>
        <p className='descTablero'>{fechaRegistro}</p>
    </div>
  )
}

