 
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import {  GenContext } from  "./context/GenContext"  ;
import {   useContext,useEffect } from "react";

import {    useNavigate } from "react-router-dom";
 

import Nav from './components/Nav'
import Nav2 from './components/Nav2'

import    Ingredientes  from './components/Ingredientes'
import    Ingrediente  from './components/Ingrediente'
import    Login  from './components/Login'
import    Login2  from './components/Login2'

import    Buscar  from './components/usuarios/buscar'

import    Inicio  from './components/Inicio'
import { useLocation } from 'react-router-dom';
import { ConstructionOutlined } from '@mui/icons-material';

import {   Box ,CssBaseline}  from "@mui/material";


function App() {

  const { Usuario, setUsuario  } = useContext(GenContext);

 // const location = useLocation();

  useEffect(() => {
    
    console.log("ini:" + Usuario.ini);


  //  const rutaActual = location.pathname;
  
   // console.log("ruta" + rutaActual)

 /*
    if (Usuario.ini == 1)
      {
       
          setUsuario( prevDatos => ({ ...prevDatos, ini: 1 }));
          const navegate = useNavigate();
          navegate('/inicio');
       }
   */
  } ,[Usuario.ini]);




  if (!Usuario.nombre){

    console.log("SIN usuario..");

  
     return (<>

<BrowserRouter>
  
  <div >  
   <Routes>
       
      <Route  path="/Login" element={<Login2/>}>Login</Route>  
      
      <Route  path="/usuarios/buscar" element={<Buscar/>}>Ingredientes</Route>  
      <Route  path="/platos" element={<Ingredientes/>}>Platos</Route>  
      <Route  path="/inicio" element={<Inicio/>}>Home</Route>  
      <Route  path="/" element={<Inicio/>}>Home</Route>  
      <Route  path="/ingrediente/:id" element={<Ingrediente/>}>Ingrediente</Route>  
    
      </Routes>
      
      <div style={{ width:"400px"}}>  
        <Login2/>
     </div>
     </div>
   </BrowserRouter>


     </>)  
     }
  else 
{
  console.log("con usuario..");
  return (
    <>
    <BrowserRouter>
    <CssBaseline />

    <Box     sx={{  
    
    
    backgroundColor: '#f5f5f5'  // Establece un fondo gris claro
  

    }}  > 
     
    <Routes>
        
       <Route  path="/Login" element={<Login2/>}>Login</Route>  
       
       <Route  path="/usuarios/buscar" element={<Buscar/>}>Ingredientes</Route>  
         <Route  path="/platos" element={<Ingredientes/>}>Platos</Route>  
       <Route  path="/inicio" element={<Inicio/>}>Home</Route>  
       <Route  path="/" element={<Inicio/>}>Home</Route>  
       <Route  path="/ingrediente/:id" element={<Ingrediente/>}>Ingrediente</Route>  
     
       </Routes>
       </Box>
       
    </BrowserRouter>
  
   </> 
  )
}
}

export default App
