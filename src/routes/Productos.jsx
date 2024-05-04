import React from 'react';
import { Button } from '../components/Button/Button';
import { ImBoxAdd } from 'react-icons/im';
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";


export default function Productos() {
  return (
    <div className='mainProductos'>
      <div className='containerButtons'>
      <Button icon={< ImBoxAdd />} onClick={clickAgregar}>
        Agregar
      </Button>
      <Button icon={< GoPencil />} onClick={clickModificar}>
        Modificar
      </Button> 
      <Button icon={< MdDeleteOutline />} onClick={clickElimar}>
        Eliminar
      </Button>
      <Button icon={< IoMdSearch  />} onClick={clickBuscar}>
        Buscar
      </Button>
      </div>

      <div className='containerPCargados'>
        <CargarProductos/>
      </div>
    
    </div>
  );
}

