import React, { useState } from 'react';
import { Button } from '../components/Button/Button';
import { ImBoxAdd } from 'react-icons/im';
import { IoMdSearch } from "react-icons/io";
import AgregarProducto from '../components/AgregarProducto/AgregarProductos';
import Tabla from '../components/Tabla/Tabla';
import { clientesBD as initialClientesBD} from '../utils/clientesBD';
import { clientesColumna } from '../components/Tabla/ColumnasTabla/clientesColumna';


export default function Clientes() {
  const [isClicked, setIsClicked] = useState(false);
  const [clientes, setclientes] = useState(initialClientesBD);
  const [searchText, setSearchText] = useState('');

  const handleClickAgregar = () => {
    setIsClicked(true);
  };

  const addProduct = (newCliente) => {
    setclientes([...clientes, newProduct]);
  };

  const deleteProduct = (idCliente) => {
    const nuevoClientes = clientes.filter(p => p.id !== idCliente);
    setStock(nuevoStock);
  };

  const handleSearchChange = (e)=>{
    setSearchText(e.target.value);
  };

  const filteredStock = clientes.filter((item)=>
    item.nombre.toLowerCase().includes(searchText.toLowerCase()) || 
    item.razonSocial.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div className='mainClientes'>

      <div className='containerSearchAdd'>
        <div className='containerSerch'>
          <input 
            type="text"
            placeholder='Buscar producto'
            value={searchText}
            onChange={handleSearchChange}
          />
          <IoMdSearch />
        </div>
        <div className='containerAdd'>
          <Button icon={<ImBoxAdd />} onClick={handleClickAgregar}></Button>
        </div>
      </div>
      
      {isClicked && <AgregarProducto setIsClicked={setIsClicked} addProduct={addProduct} />}

      <Tabla col={clientesColumna} data={filteredStock} deleteProduct={deleteProduct}  ></Tabla>

    </div>
  );
}