import React from 'react';
import { Button } from '../components/Button/Button';
import { ImBoxAdd } from 'react-icons/im';

export default function Productos() {
  return (
    <div>
      <Button icon={<ImBoxAdd />}>
        Agregar
      </Button>
      <Button icon={<ImBoxAdd />}>
        Modificar
      </Button>
      <Button icon={<ImBoxAdd />}>
        Eliminar
      </Button>
      <Button icon={<ImBoxAdd />}>
        Buscar
      </Button>
      
    </div>
  );
}

