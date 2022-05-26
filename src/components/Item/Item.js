import { CardContent, CardMedia } from "@mui/material"
import { Container } from "@mui/system"
import Card from '@mui/material/Card';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import Link from '@mui/material/Link';


const Item = (id, name, price, stock) => {
    return (
     <Container>
        <Card>
            <CardContent>
             <Link to={`/detail/${id}`}>
                <h3 className="product-card__name">{name}</h3>
             </Link>
                <Typography>{name}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">{price}</Typography>
                <ItemCount stock={stock}/>
            </CardContent>
        </Card>
     </Container>
           )
}
export default Item