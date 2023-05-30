import { createContext, useState, useEffect } from "react";

 
export const GenContext = createContext();

export function GenContextProvider(props) {
  const [Login, setLogin] = useState({ nombre: "", perfil:"", ini : 0  });

 
     
  
   
   
  const valor = {
    Login, setLogin

  };

  return (
    <GenContext.Provider value={valor}>
      {props.children}
    </GenContext.Provider>
  );
}
export default GenContextProvider;
