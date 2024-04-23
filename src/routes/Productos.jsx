import React from 'react';
import { Button } from '../components/Button/Button';
import { ImBoxAdd } from 'react-icons/im';
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";


export default function Productos() {
  return (
    <div className='containerButtons'>
      <Button icon={< ImBoxAdd />}>
        Agregar
      </Button>
      <Button icon={< GoPencil />}>
        Modificar
      </Button>
      <Button icon={< MdDeleteOutline />}>
        Eliminar
      </Button>
      <Button icon={< IoMdSearch  />}>
        Buscar
      </Button>
      
    </div>
  );
}

