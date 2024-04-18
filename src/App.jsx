import './App.css'
import { tableros } from './data/data'
import { formattedDate, formattedTime } from './utils/getDate'
import Header from './components/Header/Header'
import TableroGestion from './components/TableroDeGestion/TableroGestion'
import Fecha from './components/Fecha/Fecha'

export default function App() {

  return (
    <div className='app'>
      <>
        <Header/>
      </>

      <div className='containerHome'>
        <>
          <Fecha key={formattedDate} fecha={formattedDate} hora={formattedTime}/>
        </>
          
        <div className='containerTableros'>
        {
          tableros.map(tablero=>(
            <TableroGestion key={tablero.name} name={tablero.name} numero={tablero.numero} fechaRegistro={tablero.fechaRegisto} color={tablero.color}/>
          ))  
        }
        </div>

      </div>
      
    
    </div>
  )
}


