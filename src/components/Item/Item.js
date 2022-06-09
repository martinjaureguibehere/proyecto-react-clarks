import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'

const Item = ({ product }) => {
   const { name, price, image, stock, id } = product;
   const { addProductToCart } = useContext(CartContext)

   return (
       //JSX
       <Card>
           <CardContent>
               <div className="cardItem">
                   <img src={`${image}`} alt={name} />
                   <Button variant={'contained'} className="card-btn-details">
                        <Link to={`/product/${id}`}>Ver Detalle</Link>
                    </Button>
                   <p>{name}</p>
                   <small>Stock: {stock} u.</small>
                   <span>$ {price}</span>
                   <ItemCount product={product} />   
                   <Button onClick={() => addProductToCart({image, name, price, stock, id})}>Agregar al carrito</Button>             
               </div>
           </CardContent>
       </Card>
   )
}

export default Item;