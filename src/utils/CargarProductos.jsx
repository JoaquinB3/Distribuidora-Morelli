import React, { useState } from 'react';





// export default function CargarProducto() {
//   // Estados para los campos del producto
//   const [id, setId] = useState('');
//   const [nombre, setNombre] = useState('');
//   const [marca, setMarca] = useState('');
//   const [tipo, setTipo] = useState('');
//   const [proveedor, setProveedor] = useState('');

//   // Función para manejar el envío del formulario de carga de producto
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aquí puedes enviar los datos del nuevo producto a tu backend o hacer cualquier otra acción necesaria
//     console.log('Producto cargado:', { id, nombre, marca, tipo, proveedor });
//     // Aquí podrías también cerrar el componente de carga de producto
//     // setMostrarCargarProducto(false);
//   };

//   return (
//     <div>
//       <h2>Cargar Producto</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="id">ID:</label>
//           <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="nombre">Nombre:</label>
//           <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="marca">Marca:</label>
//           <input type="text" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="tipo">Tipo:</label>
//           <input type="text" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="proveedor">Proveedor:</label>
//           <input type="text" id="proveedor" value={proveedor} onChange={(e) => setProveedor(e.target.value)} />
//         </div>
//         <button type="submit">Cargar Producto</button>
//       </form>
//     </div>
//   );
// }
