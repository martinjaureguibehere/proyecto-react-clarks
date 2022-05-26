import { Component, useState } from "react";
import './ItemCount.css'
import onAdd from '../Item/Item';

function ItemCount({stock, onAdd}) {
    const [count, setCount] = useState(1)
    return (
        <>
            <div className="contenedor-botones">
              <button className="button-menos"   onClick={()=>{setCount(count - 1)}} disabled={count === 1}>-</button>
              <p className="p-1 text-8x1">{count}</p>
              <button className="button-mas"  onClick={()=>{setCount(count + 1)}} disabled={count === 5}>+</button>
              <button className="button-agregar"  disableElevation onClick={()=> onAdd( count)}> Agregar al carrito</button>
            </div>
        </>
    )
}
export default ItemCount