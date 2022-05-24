import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Cards.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ItemCount from '../ItemCount/ItemCount';


export default function ImgMediaCard() {
     

  
  
  return (
    
    <Card className='flip-card' sx={{ maxWidth: 345 }}>
      <div className='flip-card-inner'>
       <CardMedia className='flip-card-front'/>
        <img className='imagen-card' src='buzos.jpeg' alt='imagen de buzos'/>
      <CardContent>
        <CardActions>
        <Button size="small">Agregar al carrito</Button>
        <Button size="small">$3000</Button>
        <ItemCount/>
      </CardActions>
      </CardContent>
      <CardActions className='flip-card-back'>
        <Button  size="small">Agregar al carrito</Button>
        <Button size="small">$3000</Button>
      </CardActions>
      </div>
    </Card>
  )
}




