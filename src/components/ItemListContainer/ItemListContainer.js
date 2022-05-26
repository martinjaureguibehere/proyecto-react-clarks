import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ItemListContainer.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList'


function ImgMediaCard() {
     
  return (
    
    <Card className='flip-card' sx={{ maxWidth: 345 }}>
       <section className="item-list-container">
      <h2 className="item-list-container__title">Prenda</h2>

      <ItemList />
    </section>
        <ItemCount/>
    </Card>
  )
}

export default ImgMediaCard




