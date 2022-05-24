import { useState } from "react";

function ItemCount({stock}) {
    const [count, setCount] = useState(1)
    return (
        <>
            <div>
              <button variant="contained" onClick={()=>{setCount(count - 1)}} disabled={count === 1} className="p-1 text-8x1">-</button>
              <p className="p-1 text-8x1">{count}</p>
              <button variant="contained" onClick={()=>{setCount(count + 1)}} disabled={count === 5} className="p-1 text-8x1" >+</button>
              <button variant="contained" disableElevation onClick={()=> console.log('Agregaste al carrito{count}')}> Agregar al carrito</button>
           </div>     
        </>
    )
}
export default ItemCount