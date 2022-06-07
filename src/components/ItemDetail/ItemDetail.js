import * as React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Container, Divider, Grid, Paper, Typography} from '@mui/material';
import './ItemDetail.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const ItemDetail = ({product}) => {
const {image, name, price, stock, description} = product;

const [size, setSize] = useState('');

const handleChange = (event) => {
    setSize(event.target.value);
};

    return (
        <Container maxWidth='lg'>
            
            
            <Paper  variant="outlined">
            <h2>{name}</h2>
            <Grid container spacing={2} alignItems="center" justifyContent="space-evenly" flexWrap='wrap'>
                <Grid item xs={8}>
                    <img className='imagen' src={image} alt={name} />
                </Grid>
                <Grid >
                    <Paper elevation={4}>
                    <Container className='controlContainer'>
                    <Grid container direction="column" justifyContent="center" alignItems="flex-end">
                    
                        <Grid item><h3>$ {price}</h3></Grid>
                        <Grid item><small>Stock: {stock} u.</small></Grid>
                        <Grid item><ItemCount product={product} /></Grid>
                    </Grid>
                    </Container >
                    </Paper>
                </Grid>
            </Grid>
            <div>
            <label>Selecciona tu talle</label>
                <Select
                    className='select-custom'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    placeholder="Selecciona tu talle"
                    onChange={handleChange} 
                    >
                    <MenuItem value={'s'}>S</MenuItem>
                    <MenuItem value={'m'}>M</MenuItem>
                    <MenuItem value={'l'}>L</MenuItem>
                    <MenuItem value={'xl'}>XL</MenuItem>
                    <MenuItem value={'xxl'}>XXL</MenuItem>

                </Select>
            </div>
            <h3>Descripción:</h3>
            <Typography variant="body1" margin="20px">{description}</Typography>
            </Paper>
            <Divider variant="middle" />
        
        </Container>
    )
}

export default ItemDetail;