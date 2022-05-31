import { Button } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from "../Modal/Modal";
import { useState } from "react";



const AddToCartBtn = ({name, price, count = 1}) => { 
    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false)
    }
    return (
        <>
        <Button onClick={() => setOpen(true)} size="small" variant="contained">
            <AddShoppingCartIcon />
        </Button>
        <Modal handleClose={handleClose} open={open}>
            <h2>¡Felicitaciones!</h2>
            <p>Agregaste {name} <strong>x{count}</strong> a tu carrito</p>
            <p>Precio unitario $ {price}</p>
            <p>Precio total <strong>x{count}</strong> $ {price * count}</p>
            <Button color="secondary" variant="contained">Confirmar y Pagar</Button>
            <Button variant="outlined" onClick={handleClose}>Seguir comprando</Button>
        </Modal>
        </>
    )
}

export default AddToCartBtn;