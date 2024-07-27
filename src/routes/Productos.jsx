import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { stock as initialStock } from "../utils/stock";
import { generatorID } from '../utils/generatorID';
import Table from "../components/Tabla/Tabla";

export default function Productos() {
  const [stock, setStock] = useState(initialStock);
  const [searchText, setSearchText] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    const id = generatorID();
    const nombre = e.target.nombre.value;
    const marca = e.target.marca.value;
    const tipo = e.target.tipo.value;
    const proveedor = e.target.proveedor.value;
    const cantidad = e.target.cantidad.value;
    const preciounidad = e.target.preciounidad.value;
    const preciopack = e.target.preciopack.value;

    const newProducto = {
      id,
      nombre,
      marca,
      tipo,
      proveedor,
      cantidad,
      preciounidad,
      preciopack,
    };

    const newStock = [...stock, newProducto];

    setStock(newStock);
    console.log(newStock);
  };

  const updateProducto = (e) => {
    e.preventDefault();
        // const id = crypto.randomUUID();
        const id = 8;
        const nombre = e.target.nombre.value;
        const marca = e.target.marca.value;
        const tipo = e.target.tipo.value;
        const proveedor = e.target.proveedor.value;
        const cantidad = e.target.cantidad.value;
        const preciounidad = e.target.preciounidad.value;
        const preciopack = e.target.preciopack.value;


        const newItem = {
            id,
            nombre,
            marca,
            tipo,
            proveedor,
            cantidad,
            preciounidad,
            preciopack
        }

    console.log(newItem);

    const newStock = stock.map((item) => (item.id === id ? newItem : item));

    setStock(newStock);

    alert("Item actualizado");
  };

  const deleteProducto = (id) => {
    const newStock = stock.filter((item) => item.id !== id);
    setStock(newStock);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // const filteredClientes = clientes.filter((item)=>
  //   item.nombre.toLowerCase().includes(searchText.toLowerCase()) || 
  //   item.razonsocial.toLowerCase().includes(searchText.toLowerCase())
  // );

  const filteredStock = stock.filter((item) => 
    item.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="mainProductos">
      <div className="containerSearchAdd">
        <div className="containerSerch">
          <input
            type="text"
            placeholder="Buscar producto"
            value={searchText}
            onChange={handleSearchChange}
          />
          <IoMdSearch />
        </div>
      </div>

      <Table 
        data={filteredStock} 
        title="Productos" 
        addItem={addProduct} 
        updateItem={updateProducto}  
        deleteItem={deleteProducto}
        addDialogTitle={"Agregar producto"}
        updateDialogTitle={"Actualizar producto"}
      />

    </div>
  );
}
