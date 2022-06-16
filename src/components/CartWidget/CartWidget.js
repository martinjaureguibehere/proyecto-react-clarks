import { useState, useContext } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './CartWidget.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext'
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

const CartWidget = () =>  {
    const { cartListItems } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //const handleRemoveUser = (uid) =>{
      //  const newUser = item.filter((user) => user.uid !==uid);
        //setItems(newItems);
    //};

    return(
        <div className='cart-container-icon'>
            <LocalMallIcon
                color={'primary'} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Link to="/products" >Empezar a comprar</Link>
                        </>
                    )}
                   
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart'>
                                <img className='imagen-cart' src={`/${item.image}`} alt="imagen de carrito" />
                            </div>
                            <div className='cart-desc'>
                                <p>{item.title}</p>
                                <span className='precio-cart'>$ {item.price}</span>
                            </div>
                            <div className='cart-total'>
                                <button >
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget;