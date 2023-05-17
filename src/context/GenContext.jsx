import { createContext, useState, useEffect } from "react";

 
export const GenContext = createContext();

export function GenContextProvider(props) {
  const [Usuario, setUsuario] = useState({ nombre: "", perfil:"", ini : 0  });

 
     
  
   
   
  const valor = {
    Usuario, setUsuario

  };

  return (
    <GenContext.Provider value={valor}>
      {props.children}
    </GenContext.Provider>
  );
}
export default GenContextProvider;
