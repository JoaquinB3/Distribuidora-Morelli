import React from 'react'
import "./_header.scss"
import { Logo } from '../Logo/Logo'
import { useState } from 'react'

export default function Header() {

  const [newPage, setNewPage] = useState(flase) 
  const handClick = () => {
    setNewPage(!newPage)
  }


  return (
    <div className="navBar">
        <Logo/>
        <ul className="containerItems">
            <li className="item">INICIO</li>
            <li className="item" onClick={handClick}>PRODUCTOS</li>
            <li className="item">CLIENTES</li>
            <li className="item">PROVEEDORES</li>
            <li className="item">FACTURAS</li>
        </ul>
    </div>
  )
}


