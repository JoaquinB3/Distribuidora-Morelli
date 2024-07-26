import { useEffect, useState } from "react";
import "./_dialog.scss";

export const Dialog = ({ title, action, item, click, setClick, fields }) => {
  const [display, setDisplay] = useState("none");
  const [itemTable, setItemTable] = useState({});
  const fieldsTable = fields ?? null;

  useEffect(() => {
    setDisplay(click ? "block" : "none");
    setItemTable(item || {}); // Sincroniza formData con item cuando item cambia
  }, [click, item]);

  // Actualiza formData con las entradas del usuario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemTable((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(e);
    setClick(false); // Cierra el diálogo al guardar
  };

  return (
    <div className="overlay" style={{display}}>
      <div className="containerDialog" style={{ display }}>
        <div>
          <p>{title}</p>
          <button onClick={() => setClick(false)}>Close</button>
        </div>

        <form className="formDialog" onSubmit={handleSubmit}>
          {itemTable && !fieldsTable
            ? Object.keys(itemTable).map((key) => {
                if (key !== "id") {
                  return (
                    <div key={key}>
                      <label htmlFor={key}>{key}</label>
                      <input
                        type={typeof itemTable[key] === "number" ? "number" : "text"}
                        name={key}
                        id={key}
                        value={itemTable[key]}
                        onChange={handleChange}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div key={key}>
                      <label htmlFor={key}>{key}</label>
                      <input
                        type={typeof itemTable[key] === "number" ? "number" : "text"}
                        name={key}
                        id={key}
                        value={itemTable[key]}
                        disabled
                        onChange={handleChange}
                      />
                    </div>
                  );
                }
              })
            : fieldsTable.map((key) => {
                if (key !== "id") {
                  return (
                    <div key={key}>
                      <label htmlFor={key}>{key}</label>
                      <input type={typeof fieldsTable[key]} name={key} id={key} />
                    </div>
                  );
                }
              })}
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};