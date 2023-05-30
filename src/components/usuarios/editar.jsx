import { createContext, useState, useEffect } from "react";
import Nav2 from "../Nav2";
import { usuarios as d_usuarios, regiones , perfiles} from "../../data/usuarios";
import { useParams, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
  Grid,
  Link,
  IconButton,
  Container,
  Box,
  TextField,Button,Typography  
} from "@mui/material";
import  Texto    from "../library/Texto";
import   Titulo   from "../library/Titulo";

import   {Regiones}   from "../library/Regiones";

  

import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme(); 
const Editar = () => {

  const [Usuario, setUsuario] = useState({
    id:  0,
    login : '',
    nombre : '',
    rut : '-',
    clave : '',
    perfil : 0,
    region : 0,
    activo: 0,
  }); 
  
  const { id } = useParams();
 
  useEffect(() => {

      setUsuario(  trae_registro (id)); 
      console.log(`data 1:${JSON.stringify(Usuario)}`);
  }, []);



  const trae_registro = async (userId) => {
   
    /*
    const response = await fetch(`http://localhost:5021/ingredientes/${id}`);
    const data = await response.json();
    console.log(`data 1:${JSON.stringify(data)}`);
 */
    console.log(`id 1:${userId}`);
      return d_usuarios.find(user => user.id === userId);

    };
    
 
 


  function validacampos(event) {
    return true;
  }
 

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validacampos(event)) {
      /*
      fetch('http://localhost:3000/ingredientes', {
        method: 'POST',
        body: JSON.stringify( {id: data.id,  nombre: data.nombre}
         ),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => response.text)
   .then(data => console.log(data))
      .catch(error => console.log(error));*/
      /*
      const data = new FormData(event.currentTarget);
      const nombrEval = data.get('usuario').trim() !== ''
      const claveEval = data.get('clave').trim() !== ''
  */
 
    } else {
      console.log("Los campos no son válidos");
    }
  };

 
  return (
    <>
 <ThemeProvider theme={defaultTheme}>
<Container    sx={{
              backgroundColor: "#f7f9fa", // Establece un fondo gris claro
            }}>

      <Nav2 />
      
     
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 ,
    
    border: '1px solid #ccc', // Agrega un borde de 1px sólido con color gris claro
    backgroundColor: '#ffffff', 
      // Establece un fondo gris claro
    padding: '10px', 
    borderRadius: '5px',
    width: '550px',
    '& .super-app-theme--header': {
      fontWeight: 'bold',
     //backgroundColor: 'rgba(255, 7, 0, 0.55)',
    },
    }}> 
  <Titulo titulo="Editar Usuario"/>
            

  <Box 
          sx={{
            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >

         <TextField
              margin="normal"
             
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="usuario"
              autoFocus
              variant="filled"
              value={Usuario.login}
              sx={{
              //  backgroundColor: '#e9eff7' 
                            }}

            />
            <Regiones      />
             <TextField
              margin="normal"
              fullWidth
               
              id="nombre"
              label="Nombre Usuario"
              name="nombre"
              autoComplete="nombre"
 
              variant="filled"
              placeholder="Ej: pepito los palotes"
       

            />
             <TextField
              margin="normal"
              variant="filled"
       
              fullWidth
              id="rut"
              label="RUT"
              name="rut"
              autoComplete="rut"
              placeholder="Ej: 11340632-1"
            />
      
        <Button
          type="submit"
           color="primary"
          variant="contained"
          sx={{ mt: 3, mb: 4 }}
        >
          Guardar
        </Button>
        <Button
           
           type="submit"
           color="primary"
         variant="outlined"
          sx={{ mt: 3, mb: 4 }}
          
        >
          Volver
        </Button>

        </Box>

       
      </Box>
      </Container>
      </ThemeProvider>
    </>
  );  
};

export default Editar;
 