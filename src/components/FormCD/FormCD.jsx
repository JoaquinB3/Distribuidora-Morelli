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
                    <input type="text" name="totalEfectivo" id="totalEfectivo" placeholder="Total Efectivo"/>
                </div>
                <div className="containerIngresoSalida">
                  <div className="ingresoSalida">
                    <div className="containerInputs">
                      <h4>INGRESOS DEL DIA</h4>
                      <input type="text" name="ventas" id="ventas" placeholder="Ventas"/>
                      <input type="text" name="cobranzas" id="cobranzas" placeholder="Cobranzas"/>
                      <input type="text" name="otros" id="otros" placeholder="Otros"/>
                    </div>
                    <div className="containerInputs">
                      <h4>SALIDAS DEL DIA</h4>
                      <input type="text" name="tarjeta" id="tarjeta" placeholder="Tarjeta"/>
                      <input type="text" name="transferencia" id="transferencia" placeholder="Transferencia"/>
                      <input type="text" name="otros" id="otros" placeholder="Otros"/>
                    </div>
                  </div>
                  <div className="containerSalida">
                      <div className="ingresosTotal">
                        <h4>INGRESOS TOTAL</h4>
                        <span>1.000.000</span>
                        <h4>SALIDAS TOTAL</h4>
                        <span>1.000.000</span> 
                      </div>
                      <div className="inputsTotal">
                        <div className="containerInputs">
                          <input type="text" name="compras" id="compras" placeholder="Compras" />
                          <input type="text" name="pagosProv" id="pagosProv" placeholder="Pagos Proveedores" />
                          <input type="text" name="retiros" id="retiros" placeholder="Retiros" />
                        </div>
                        <div className="containerInputs">
                          <input type="text" name="tarjeta" id="tarjeta" placeholder="Tarjeta"/>
                          <input type="text" name="transferencia" id="transferencia" placeholder="Transferencia"/>
                          <input type="text" name="otros" id="otros" placeholder="Otros"/>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="buttons">
                    <Button icon={<BsPrinter />}/>
                    <Button icon={<MdClose />}/>
                </div>
                        
            </form>
    </div>
  )
}


