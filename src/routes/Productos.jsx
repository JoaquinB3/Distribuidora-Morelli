import React, { useState } from 'react';
import { Button } from '../components/Button/Button';
import { ImBoxAdd } from 'react-icons/im';
import { IoMdSearch } from "react-icons/io";
import AgregarProducto from '../components/AgregarProducto/AgregarProductos';
import Tabla from '../components/Tabla/Tabla';
import { stock as initialStock } from "../utils/stock";

export default function Productos() {
  const [isClicked, setIsClicked] = useState(false);
  const [stock, setStock] = useState(initialStock);
  const [searchText, setSearchText] = useState('');

  const handleClickAgregar = () => {
    setIsClicked(true);
  };

  const addProduct = (newProduct) => {
    setStock([...stock, newProduct]);
  };

  const deleteProduct = (idProduct) => {
    const nuevoStock = stock.filter(p => p.id !== idProduct);
    setStock(nuevoStock);
  };

  const handleSearchChange = (e)=>{
    setSearchText(e.target.value);
  };

  const filteredStock = stock.filter((item)=>
    item.nombre.toLowerCase().includes(searchText.toLowerCase()) || 
    item.marca.toLowerCase().includes(searchText.toLowerCase()) ||
    item.tipo.toLowerCase().include(searchText.toLowerCase())
  );


  return (
    <div className='mainProductos'>

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

      <Tabla stock={filteredStock} deleteProduct={deleteProduct} />
    </div>
  );
}

