import React, { useState } from 'react';
import "./_agregarProducto.scss"
import { RxCross1 } from "react-icons/rx";



export default function AgregarProducto({setIsClicked, addProduct}) {
 

    // Función para manejar el envío del formulario de carga de producto
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(e.target);

        const id = e.target.querySelector("#id").value;
        // console.log(id);
        const nombre = e.target.querySelector("#nombre").value;
        const marca = e.target.querySelector("#marca").value;
        const tipo = e.target.querySelector("#tipo").value;
        const proveedor = e.target.querySelector("#proveedor").value;
        const cantidad = e.target.querySelector("#cantidad").value;
        
        console.log('Producto cargado:', { id, nombre, marca, tipo, proveedor, cantidad });
        
        const newProduct = {
            id,
            nombre,
            marca,
            tipo,
            proveedor,
            cantidad
        }

        addProduct(newProduct);
        console.log(newProduct);
        setIsClicked(false);
    };

    return (
        <div className='capaDisfuminada'>
            <div className='containerAgregarProducto'>
            <div className='containerButton'>
                <button id="cerra" onClick={()=>setIsClicked(false)}><RxCross1 className='botonCerrar' /></button>
            </div>
            <div className='containerTitle'>
                <h2>Cargar Producto</h2>
            </div>
            <form id='formulario' onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <input type="text" id="id" name="id" placeholder='ID' />
                </div>
                <div>
                    <input type="text" id="nombre" name="nombre" placeholder='NOMBRE' />
                </div>
                <div>
                    <input type="text" id="marca" name="marca" placeholder='MARCA' />
                </div>
                <div>
                    <input type="text" id="tipo" name="tipo" placeholder='TIPO' />
                </div>
                <div>
                    <input type="text" id="proveedor" name="proveedor" placeholder='PROVEEDOR' />
                </div>
                <div>
                    <input type="text" id="cantidad" name="cantidad" placeholder='CANTIDAD' />
                </div>
                <div className='containerButtonCargar'>
                    <button type="submit" className='btnCargarProducto'>Cargar Producto</button>
                </div>
            </form>
            </div>
        </div>
    );
}
