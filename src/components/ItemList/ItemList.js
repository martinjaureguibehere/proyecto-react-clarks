import React, { useEffect, useState } from 'react';
import Item from '../Item/Item'
import Grid from '@mui/material/Grid';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                  id={product.id}
                />
              </div>
            );
          })}
        </>
      ) : (
        <img className="imagen-buzo" src='buzos.jpeg' alt='buzo' />
      )}
    </div>
  );
}
export default ItemList