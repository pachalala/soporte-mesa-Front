import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select    from '@mui/material/Select';


import { usuarios as d_usuarios, perfiles  } from "../../data/usuarios";

export const Perfiles = (props)=>{


return (
<FormControl fullWidth  variant="filled"   sx={{   mt: 3 }}>
        <InputLabel id="lbl_perfil">Perfil</InputLabel>
        <Select
          labelId="lbl_region"
          id="perfil"
        // value={age}
          label="Age"

          {...props}
            name="perfil"
          //onChange={handleChange}
        >

      {perfiles.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {option.nombre}
        </MenuItem>
      ))}

          
        </Select>
      </FormControl>

)

}