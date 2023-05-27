import {Typography} from "@mui/material"; 

const Titulo  = ({
    titulo
  }) => {
    return (
        <Typography component="h1" variant="h5">
       {titulo}
</Typography>
    );
  };
  
 

export default Titulo;