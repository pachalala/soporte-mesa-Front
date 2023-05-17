import { Link } from "react-router-dom";
import { AppBar, Toolbar,Typography ,Button} from '@mui/material';
import {  GenContext } from  "../context/GenContext"  ;
import {   useContext } from "react";
 
 

function Nav() {

  const {  Usuario, setUsuario   } = useContext(GenContext);


  function handleClick() {
    setUsuario({ nombre: "", perfil:""  });
    console.log('Se hizo clic en el enlace');
  }


  return (
    <nav>
     
      <AppBar position="static">
        <Toolbar>
        <ul>
          <li>
            <Link to="/Inicio">Home</Link>
          </li>
          <li>
            <Link to="/ingredientes">Ingredientes</Link>
          </li>
          <li>
            <Link to="/ingrediente">Ingrediente</Link>
          </li>
        </ul>

          usuario: {Usuario.nombre}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="#" onClick={handleClick}>Salir</Link>
          <Link to="/">Ingrediente</Link> <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </nav>
  );
}

export default Nav;
