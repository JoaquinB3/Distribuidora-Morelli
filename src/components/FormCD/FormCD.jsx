import "./_formCD.scss"
import Button from "../Button/Button";
import { BsPrinter } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function FormCD() {
  return (
    <div className='containerFormCD'>
      <form action="">
                <h3 className="titleCD">CAJA DIARIA</h3>

                <div className="containerHead">
                    <input type="text" name="cajaInicial" id="cajaInicial" placeholder="Caja Inicial"/>
                    <input type="text" name="totalEfectivo" id="totalEfectivo" placeholder="Caja Inicial"/>
                </div>
                <div>

                </div>
                <div className="buttons">
                    <Button icon={<BsPrinter />}/>
                    <Button icon={<MdClose />}/>
                </div>
                        
            </form>
    </div>
  )
}


