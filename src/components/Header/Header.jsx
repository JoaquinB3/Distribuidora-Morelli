import React from 'react'
import "./_header.scss"
import { Logo } from '../Logo/Logo'

export default function Header() {
  return (
    <div className="navBar">
        <Logo/>
        <ul className="containerItems">
            <li className="item">INICIO</li>
            <li className="item">PRODUCTOS</li>
            <li className="item">CLIENTES</li>
            <li className="item">PROVEEDORES</li>
            <li className="item">FACTURAS</li>
        </ul>
    </div>
  )
}


