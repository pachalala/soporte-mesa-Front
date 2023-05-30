 import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select    from '@mui/material/Select';


import { usuarios as d_usuarios, regiones  } from "../../data/usuarios";

export const Regiones = ()=>{


return (
<FormControl fullWidth  variant="filled">
        <InputLabel id="lbl_region">Región</InputLabel>
        <Select
          labelId="lbl_region"
          id="region"
        // value={age}
          label="Age"
          //onChange={handleChange}
        >

      {regiones.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.nombre}
        </MenuItem>
      ))}

          
        </Select>
      </FormControl>

)

}