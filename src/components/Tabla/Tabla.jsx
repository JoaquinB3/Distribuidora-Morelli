import React, { useState } from 'react'
import "./_tabla.scss"
import {stock as initialStock} from "../../utils/stock"


const Tabla = ({stock}) => {
  
  return (
    <div className='containerTable'>
      <table className='table'>
        <thead className='headTable'>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>MARCA</th>
                <th>TIPO</th>
                <th>PROVEEDOR</th>
                <th>CANTIDAD</th>
            </tr>
        </thead>
        <tbody>
            {stock.map(item => (
            <tr  key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.marca}</td>
                <td>{item.tipo}</td>
                <td>{item.proveedor}</td>
                <td>{item.cantidad}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tabla






