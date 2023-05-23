 
 
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

import    Inicio  from './components/Inicio'
import { useLocation } from 'react-router-dom';
import { ConstructionOutlined } from '@mui/icons-material';



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




  if (!Usuario.nombre)
     return (<>
        <div style={{ width:"400px"}}>  
     <Login/>
     </div>
     </>)  
  else 
{
  console.log("con usuario..");
  return (
    <>
    <BrowserRouter>
  
   <div style={{ width:"400px"}}>  
    <Routes>
        
       <Route  path="/Login" element={<Login/>}>Login</Route>  
       
       <Route  path="/ingredientes" element={<Ingredientes/>}>Ingredientes</Route>  
       <Route  path="/platos" element={<Ingredientes/>}>Platos</Route>  
       <Route  path="/inicio" element={<Inicio/>}>Home</Route>  
       <Route  path="/" element={<Inicio/>}>Home</Route>  
       <Route  path="/ingrediente/:id" element={<Ingrediente/>}>Ingrediente</Route>  
     
       </Routes>
       </div>
       
    </BrowserRouter>
  
   </> 
  )
}
}

export default App
