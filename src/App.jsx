 
 
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
 

import Nav from './components/Nav'


import    Ingredientes  from './components/Ingredientes'
import    Ingrediente  from './components/Ingrediente'



function App() {
 
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
       <Route  path="/ingredientes" element={<Ingredientes/>}>Ingredientes</Route>  
       <Route  path="/platos" element={<Ingredientes/>}>Platos</Route>  
       <Route  path="/" element={<Ingredientes/>}>Home</Route>  
       <Route  path="/ingrediente/:id" element={<Ingrediente/>}>Ingrediente</Route>  
     
       </Routes>



    
    </BrowserRouter>
   </> 
  )
}

export default App
