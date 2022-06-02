    import './NavBar.css'
    import { Link } from 'react-router-dom'
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';
    import * as React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import Button from '@mui/material/Button';
    import IconButton from '@mui/material/IconButton';
    import MenuIcon from '@mui/icons-material/Menu';
    import CartWidget from '../CartWidget/CartWidget';
    
    export default function ResponsiveAppBar() {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Button><Link to="/contact">Contacto</Link></Button>
              <Button><Link to="/Home">Home</Link></Button>
              <Button><Link to="/Products">Productos</Link></Button>
              <Button><CartWidget/></Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
    
