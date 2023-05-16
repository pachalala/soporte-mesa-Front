import { createContext, useState, useEffect } from "react";

 
export const GenContext = createContext();

export function GenContextProvider(props) {
  const [Usuario, setUsuario] = useState({ nombre: "", perfil:""  });

 
     
  
   
  useEffect(() => {
    //   setPlatos_db(D_Platos);
    //   setPlatos_Lista(D_Platos);
   // llena_ingredientes();
    
   
 //   console.log( " ini context:: ");
   // setPlatos_l(D_Platos);

  }, []);
 
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
