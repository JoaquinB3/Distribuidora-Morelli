// import React from 'react'
import "./_header.scss"
import { Logo } from '../Logo/Logo'
// import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


  // onClick={handClick}
  // const [newPage, setNewPage] = useState(false) 
  // const handClick = () => {
  //   setNewPage(!newPage)
  // }


  return (
    <div className="navBar">
        <Logo/>
        <ul className="containerItems">
            <Link to={`/`}>
              <li className="item"><span>INICIO</span></li>
            </Link>
            <Link to={`/productos`}>
              <li className="item"><span>PRODUCTOS</span></li>
            </Link>
            <Link to={`/clientes`}>
              <li className="item"><span>CLIENTES</span></li>
            </Link>
            <Link to={`/`}>
              <li className="item"><span>COMPRAS</span></li>
            </Link>
            <Link to={`/`}>
              <li className="item"><span>VENTAS</span></li>
            </Link>
            <Link to={`/`}>
              <li className="item"><span>REMITO</span></li>
            </Link>
            <Link to={`/`}>
              <li className="item"><span>CONSULTAR VENTAS</span></li>
            </Link>
            <Link to={`/cajaDiaria`}>
              <li className='item'><span>CAJA DIARIA</span></li>
            </Link>
        </ul>
    </div>
  )
}


