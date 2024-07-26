import React, { useEffect, useState } from 'react'
import "./_fecha.scss"


export default function Fecha() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    const updateFechaHora = () => {
      const now = new Date();
      setFecha(now.toLocaleDateString());
      setHora(now.toLocaleTimeString());
    };

    updateFechaHora();
    const intervalId = setInterval(updateFechaHora, 1000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <div className='containerFechaHora'>
      <span className='fechaHoy'>{fecha}</span>
      <span className='horaHoy'>{hora}</span>
    </div>
  );
}
