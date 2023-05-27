import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {Button,Alert } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect , useContext} from 'react';

import {  GenContext } from  "../context/GenContext"  ;


import {  useNavigate } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


export default function Login2() {

  const {  Usuario, setUsuario   } = useContext(GenContext);

  const [esnombreValido, setesnombreValido] = useState(true);

  const [esclaveValido, setesclaveValido] = useState(true);

  const [  alert, setalert  ] = useState(false);



  const navigateTo = useNavigate ();



  useEffect(() => {
    //   setPlatos_db(D_Platos);
    //   setPlatos_Lista(D_Platos);
    // llena_ingredientes();
    setUsuario({});

    console.log(" ini context:: ");
    // setPlatos_l(D_Platos);
  }, []);



  const handleSubmit2 = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      usuario: data.get('usuario'),
      clave: data.get('clave'),
    });
  };


  const  validacampos  = (event) =>{

    const data = new FormData(event.currentTarget);
    const nombrEval = data.get('usuario').trim() !== ''
    const claveEval = data.get('clave').trim() !== ''
   
    setesnombreValido(nombrEval);
    setesclaveValido(claveEval);

    return nombrEval && claveEval ;

  }


  const handleSubmit = event => {
    event.preventDefault();

  // console.log("data:" + JSON.stringify(data));

    if (validacampos(event)  ) { /*
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

      const data = new FormData(event.currentTarget);
      const nombrEval = data.get('usuario').trim() !== ''
      const claveEval = data.get('clave').trim() !== ''
     
      

    setUsuario({ nombre: data.get('usuario'), perfil:"123", ini:1  });

      navigateTo('/Inicio');
     // window.location.href = '/Inicio';
    
    
     //setalert(true);


   //  setUsuario({ nombre: data.nombre, perfil:"123", ini:1  });
   //  navigateTo('/Inicio');
    
  } else {
      console.log('Los campos no son válidos');
    }
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Soporte - Mesa ayuda
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Nombre Usuario"
              name="usuario"
              autoComplete="usuario"
              autoFocus

              error={!esnombreValido}
              helperText={!esnombreValido && 'El campo no puede estar vacío'}
       

            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="clave"
              label="Clave"
              type="password"
              id="clave"
              autoComplete="current-password"
           
           
              error={!esclaveValido}
              helperText={!esclaveValido && 'El campo no puede estar vacío'}
       
           
           />


<div >
          {alert ? <Alert     sx={{mb: 3}} severity='error'>Usuario o clave inválidos</Alert> : <></> }
          </div>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
          
          </Box>
        </Box>
         
      </Container>
    </ThemeProvider>
  );
}