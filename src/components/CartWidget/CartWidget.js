import LocalMallIcon from '@mui/icons-material/LocalMall';
import IconButton from '@mui/material/IconButton';
import './CartWidget.css'

const CartWidget = () => {

    return (
        <IconButton aria-label="cart" sx={{ margin: '0px 10px' }}>
                <LocalMallIcon color="secondary" />
        </IconButton>

    )
}

export default CartWidget;