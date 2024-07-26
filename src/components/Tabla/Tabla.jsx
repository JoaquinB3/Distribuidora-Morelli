import { useState } from "react";
import { Dialog } from "../Dialog/Dialog";
import "./_tabla.scss";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { ImBoxAdd } from 'react-icons/im';

export default function Table({
  data,
  title,
  updateItem,
  addItem,
  deleteItem,
  updateDialogTitle,
  addDialogTitle,
}) {
  const [clickUpdate, setClickUpdate] = useState(false);
  const [clickAdd, setClickAdd] = useState(false);
  const [item, setItem] = useState({});
  const fields = Object.keys(data[0]); //Taking the first element of the array to get the fields

  const handleUpdate = (id = 0) => {
    setClickUpdate(true);
    const item = data.find((item) => item.id === id);
    setItem(item);
  };
  const handleAdd = () => {
    setClickAdd(true);
  };

  return (
    <div className='containerTableSection'>
      <p>{title}</p>
      <div className='containerAdd'>
        <button className="buttonAdd" onClick={handleAdd}><ImBoxAdd/></button>
      </div>
      <div className="containerTable">
        <table className='table'>
          <thead className='headTable'>
            <tr>
              {fields.map((field) => (
                <th key={field}>{field}</th>
              ))}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {Object.keys(item).map((key) => (
                  <td key={key}>{item[key]}</td>
                ))}
                <td className="containerButtonTable">
                  <button className='buttonTable' onClick={() => handleUpdate(item.id)}><GoPencil /></button>
                  <button className='buttonTable' onClick={() => deleteItem(item.id)}><MdDeleteOutline /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Dialog
        title={updateDialogTitle}
        action={addItem}
        click={clickAdd}
        setClick={setClickAdd}
        fields={fields}
      ></Dialog>

      <Dialog
        title={addDialogTitle}
        action={updateItem}
        item={item}
        click={clickUpdate}
        setClick={setClickUpdate}
      ></Dialog>
    </div>
  );
}






// import "./_tabla.scss";
// import { GoPencil } from "react-icons/go";
// import { MdDeleteOutline } from "react-icons/md";


// const Tabla = ({col, data, deleteItem }) => {
//   return (
//     <div className='containerTable'>
//       <table className='table'>
//         <thead className='headTable'>
//           <tr>
//             {col.map((campo, index) => (
//               <th key={index}>{campo}</th>
//             ))}
//             <th></th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.id}>
//               {col.map((campo, index) => (
//                 <td key={index}>{item[campo.toLowerCase().replace(/\s+/g, '')]}</td>
//               ))}
//               <td><button className='buttonTable'><GoPencil /></button></td>
//               <td><button className='buttonTable' onClick={() => deleteItem(item.id)}><MdDeleteOutline /></button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Tabla;








