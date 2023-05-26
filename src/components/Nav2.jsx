import {useState}  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
 

import { Link } from "react-router-dom";
import {  GenContext } from  "../context/GenContext"  ;
import {   useContext } from "react";
import {  Dialog, DialogTitle,DialogContent,DialogContentText,DialogActions} from '@mui/material';


const pages = [
{
  name:  'Inicio',
  link :  '/inicio'
}
  , 
  {
    name:  'Usuarios-Crear',
    link :  '/usuarios/crear'
  }
  , 
  {
    name:  'Usuarios-Buscar',
    link :  '/usuarios/buscar'
  }
  
  


];
const settings = [
    {
        name:  'Cuenta',
        link :  '/inicio'
      }
        , 
        {
          name:  'Salir',
          link :  '/Login'
        }
      
    ];

function Nav2() {
  const [anchorElNav, setAnchorElNav] =   useState(null);
  const [anchorElUser, setAnchorElUser] =  useState(null);
  const [openD, setOpenD] =  useState(false);
  const {  Usuario, setUsuario   } = useContext(GenContext);

  const handleYes = () => {
    setUsuario({ nombre: "", perfil:""  });
  
    console.log("cerrando popup");
  };



  const handleCancel = () => {
    setOpenD(false);
  };


  function handleClick() {
    setOpenD(true);
     
  }





  const handleOpenNavMenu = (event ) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event ) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const linkStyle = {
    textDecoration: 'none',  // Elimina la decoración de texto
    color: 'inherit',  // Utiliza el color heredado
    cursor: 'pointer'  // Muestra el cursor como puntero
  };

  return (

<>

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MESA AYUDA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link to={page.link}   style={linkStyle}>{page.name}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         MESA AYUDA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.link}  key={page.name}  style={linkStyle}>   
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((page) => (
          
                  <MenuItem key={page.name} onClick={handleCloseUserMenu}>
                 <Link to={page.link}  key={page.name}  style={linkStyle}  >   
                  <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>




<Dialog
open={openD}
onClose={handleCancel}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
  {"Salir"}
</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
    ¿Estás seguro de querer salir?
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button  onClick={handleCancel}   >Cancelar</Button>
  <Button onClick={handleYes} autoFocus>
    OK
  </Button>
</DialogActions>
</Dialog>
</>
  );
}
export default Nav2;
