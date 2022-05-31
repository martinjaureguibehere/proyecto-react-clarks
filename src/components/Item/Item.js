import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'


const Item = ({ product }) => {
   const { name, price, image, stock } = product;
   return (
       //JSX
       <Card>
           <CardContent>
               <div className="cardItem">
                   <img src={`${image}`} alt={name} />
                   <p>{name}</p>
                   <small>Stock: {stock} u.</small>
                   <span>$ {price}</span>
                   <ItemCount product={product} />                
               </div>
           </CardContent>
       </Card>
   )
}

export default Item;