 
 
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import {  GenContext } from  "./context/GenContext"  ;
import {   useContext } from "react";

import {    useNavigate } from "react-router-dom";
 

import Nav from './components/Nav'
import    Ingredientes  from './components/Ingredientes'
import    Ingrediente  from './components/Ingrediente'
import    Login  from './components/Login'
import    Inicio  from './components/Inicio'

function App() {

  const { Usuario  } = useContext(GenContext);
 
  if (!Usuario.nombre)
     return (<>
     <Login/>
     </>)  
  else 
{
  console.log("con usuario..");
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
       <Route  path="/login" element={<Login/>}>Login</Route>  
      
       <Route  path="/ingredientes" element={<Ingredientes/>}>Ingredientes</Route>  
       <Route  path="/platos" element={<Ingredientes/>}>Platos</Route>  
       <Route  path="/inicio" element={<Inicio/>}>Home</Route>  
       <Route  path="/" element={<Inicio/>}>Home</Route>  
       <Route  path="/ingrediente/:id" element={<Ingrediente/>}>Ingrediente</Route>  
     
       </Routes>



    
    </BrowserRouter>
   </> 
  )
}
}

export default App
