import { createContext, useState, useEffect } from "react";
import Nav2 from "../Nav2";
import { usuarios as d_usuarios } from "../../data/usuarios";
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

 
import EditIcon from "@mui/icons-material/Edit";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme(); 
const Buscar = () => {
  const [usuarios, setusuarios] = useState([]);

  const [buscar, setbuscar] = useState(false);

  const navegate = useNavigate();

  useEffect(() => {
    //   setPlatos_db(D_Platos);
    //   setPlatos_Lista(D_Platos);
    // llena_ingredientes();
    setusuarios(d_usuarios);

    console.log(" ini context:: ");
    // setPlatos_l(D_Platos);
  }, []);

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

      setbuscar(true);
    } else {
      console.log("Los campos no son válidos");
    }
  };

  const MatEdit = ({ index }) => {
    const handleEditClick = () => {
      navegate("/ingrediente/" + index);
    };

    return (
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        onClick={handleEditClick}
      >
        <EditIcon />
      </IconButton>
    );
  };

  const columns = [
    {
      field: "actions",
      headerName: "",
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <MatEdit index={params.row.login} />
          </div>
        );
      },  
    },
    { field: "rut", headerName: "Rut", width: 30,  headerClassName: 'super-app-theme--header', },
    { field: "nombre", headerName: "Nombre", width: 140,  headerClassName: 'super-app-theme--header', },
    { field: "region", headerName: "Region", width: 140,  headerClassName: 'super-app-theme--header', },
  ];

  return (
    <>
      <Nav2 />
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
     
     
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
  <Titulo titulo="Buscar Usuario"/>
            

  <Box 
          sx={{
            marginTop: 8,
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
       
              sx={{
              //  backgroundColor: '#e9eff7' 
                            }}

            />
            <Texto 
             id= "nombrex"
             name = "nombrex"
             label = "Nombre Usuario XX"
             
            />
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
          Buscar
        </Button>


        </Box>

        {buscar ? (
          <div style={{ width: 500 }}>
            <DataGrid
  

              rows={usuarios}
              columns={columns}
              initialState={{
                pageSize: 5,
                pagination: {
                  paginationModel: { pageSize: 25, page: 0 },
                },
              }}
            />
          </div>
        ) : (
          <></>
        )}
      </Box>
      </Container>
      </ThemeProvider>
    </>
  );  
};

export default Buscar;
 