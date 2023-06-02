import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GenContext } from "./context/GenContext";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";
  
import Login from "./components/Login";
import Login2 from "./components/Login2";

import Buscar from "./components/usuarios/buscar";

import Editar from "./components/usuarios/editar";
import Editar_Formik from "./components/usuarios/editar";

import Inicio from "./components/Inicio";
import { useLocation } from "react-router-dom";
import { ConstructionOutlined } from "@mui/icons-material";

import { Box, CssBaseline ,Container} from "@mui/material";

function App() {
  const { Login, setLogin } = useContext(GenContext);

  // const location = useLocation();

  useEffect(() => {
    console.log("ini:" + Login.ini);

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
  }, [Login.ini]);

  if (!Login.nombre) {
    console.log("SIN usuario..");

    return (
      <>
        <div style={{ width: "400px" }}>
          <Login2 />
        </div>
      </>
    );
  } else {
    console.log("con usuario..");
    return (
      <>
        <BrowserRouter>
          <CssBaseline />
          <Container    sx={{
              backgroundColor: "#f7f9fa", // Establece un fondo gris claro
            }}>
          
            <Routes>
              <Route path="/Login" element={<Login2 />}>
                Login
              </Route>

              <Route path="/usuarios/buscar" element={<Buscar />}>
                Ingredientes
              </Route>
              <Route path="/usuarios/editar/:id" element={<Editar_Formik />}>
                Editar
              </Route>
              <Route path="/inicio" element={<Inicio />}>
                Home
              </Route>
              <Route path="/" element={<Inicio />}>
                Inicio
              </Route>
             
            </Routes>
          </Container   >
        </BrowserRouter>
      </>
    );
  }
}

export default App;
