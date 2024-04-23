import '../App.css'
import { tableros } from '../data/data'
import { formattedDate, formattedTime } from '../utils/getDate'
import Header from '../components/Header/Header'
import TableroGestion from '../components/TableroDeGestion/TableroGestion'
import Fecha from '../components/Fecha/Fecha'
import { Outlet } from 'react-router-dom'



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
        
        <Outlet/>
           
          

      </div>
      
    
    </div>
  )
}


