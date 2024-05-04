import React, { useState } from 'react';
import "./_agregarProducto.scss"
import { RxCross1 } from "react-icons/rx";
import "../../utils/stock"



export default function AgregarProducto({setIsClicked}) {
 

    // Función para manejar el envío del formulario de carga de producto
    const handleSubmit = (e) => {
        e.preventDefault();

        const id = e.target.getElementById("id").value;
        const nombre = e.target.getElementById("nombre");
        const marca = e.target.getElementById("marca");
        const tipo = e.target.getElementById("tipo");
        const proveedor = e.target.getElementById("proveedor");
        const cantidad = e.target.getElementById("cantidad")
        
        console.log('Producto cargado:', { id, nombre, marca, tipo, proveedor, cantidad });
        
        const newProduct = {
            id,
            nombre,
            marca,
            tipo,
            proveedor,
            cantidad
        }

        stock.push(newProduct)
    };

    return (
        <div className='containerAgregarProducto'>
        <div className='containerButtonTitle'>
            <h2>Cargar Producto</h2>
            <button id="cerra" onClick={()=>setIsClicked(false)}><RxCross1 className='botonCerrar' /></button>
        </div>
        <form id='formulario' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" name="id" />
            </div>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
            </div>
            <div>
                <label htmlFor="marca">Marca:</label>
                <input type="text" id="marca" name="marca" />
            </div>
            <div>
                <label htmlFor="tipo">Tipo:</label>
                <input type="text" id="tipo" name="tipo" />
            </div>
            <div>
                <label htmlFor="proveedor">Proveedor:</label>
                <input type="text" id="proveedor" name="proveedor" />
            </div>
            <div>
                <label htmlFor="cantidad">Cantidad:</label>
                <input type="text" id="cantidad" name="cantidad" />
            </div>
            <div className='containerButtonCargar'>
                <button type="submit">Cargar Producto</button>
            </div>
        </form>
        </div>
    );
}
