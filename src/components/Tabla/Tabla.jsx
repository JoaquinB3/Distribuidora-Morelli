import React from 'react';
import "./_tabla.scss";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

const Tabla = ({ stock, deleteProduct }) => {
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
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {stock.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>{item.marca}</td>
              <td>{item.tipo}</td>
              <td>{item.proveedor}</td>
              <td>{item.cantidad}</td>
              <td><button className='buttonTable'><GoPencil /></button></td>
              <td><button className='buttonTable' onClick={() => deleteProduct(item.id)}><MdDeleteOutline /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;






