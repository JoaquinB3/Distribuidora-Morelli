import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { clientesBD } from '../utils/clientesBD';
import Table from '../components/Tabla/Tabla';



export default function Clientes() {
  const [clientes, setClientes] = useState(clientesBD);
  const [searchText, setSearchText] = useState('');

  const addCliente = (e) => {
   console.log(e); 
    e.preventDefault();

        const id = crypto.randomUUID();
        const nombre = e.target.nombre.value;
        const razonsocial = e.target.razonsocial.value;
        const contacto = e.target.contacto.value;
        const telefono = e.target.telefono.value;
        const mail = e.target.mail.value;
        
        const newCliente = {
            id,
            nombre,
            razonsocial,
            contacto,
            telefono,
            mail
        }

        const newClientesBD = [...clientes, newCliente]

        setClientes(newClientesBD);
        console.log(newClientesBD);
  };

  const updateCliente = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
        const nombre = e.target.nombre.value;
        const razonsocial = e.target.razonsocial.value;
        const contacto = e.target.contacto.value;
        const telefono = e.target.telefono.value;
        const mail = e.target.mail.value;
        
        const newItem = {
            id,
            nombre,
            razonsocial,
            contacto,
            telefono,
            mail
        }

    console.log(newItem);

    const newClientes = clientes.map((item) => (item.id === id ? newItem : item));

    setClientes(newClientes);

    alert("Item actualizado");
  };

  const deleteCliente = (id) => {
    const newClientes = clientes.filter((item) => item.id !== id);
    setClientes(newClientes);
  };

  const handleSearchChange = (e)=>{
    setSearchText(e.target.value);
  };

  // const filteredCliente = clientes.filter((item)=>
  //   item.nombre.toLowerCase().includes(searchText.toLowerCase()) || 
  //   item.razonSocial.toLowerCase().includes(searchText.toLowerCase())
  // );


  return (
    <div className='mainClientes'>

      <div className='containerSearchAdd'>
        <div className='containerSerch'>
          <input 
            type="text"
            placeholder='Buscar Cliente'
            value={searchText}
            onChange={handleSearchChange}
          />
          <IoMdSearch />
        </div>
      </div>
      
      < Table 
        data={clientes} 
        title="Clientes" 
        addItem={addCliente}
        updateItem={updateCliente}  
        deleteItem={deleteCliente}
        addDialogTitle={"Agregar Cliente"}
        updateDialogTitle={"Actualizar Cliente"}
      />

    </div>
  );
}