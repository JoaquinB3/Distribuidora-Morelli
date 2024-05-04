import React, { useState } from 'react';
import { Button } from '../components/Button/Button';
import { ImBoxAdd } from 'react-icons/im';
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import AgregarProducto from '../components/AgregarProducto/AgregarProductos';
import Tabla from '../components/Tabla/Tabla';


export default function Productos() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClickAgregar = (e)=>{
    setIsClicked(true)
  };
  
  
  return (
    <div className='mainProductos'>
      <div className='containerButtons'>
      <Button icon={< ImBoxAdd />} onClick={handleClickAgregar}></Button>
      </div>

      {isClicked && <AgregarProducto setIsClicked={setIsClicked}/>}

      <Tabla/>
    
    </div>
  );
}

