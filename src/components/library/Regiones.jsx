import { InputLabel, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createContext, useState, useEffect } from "react";

import { usuarios as d_usuarios, regiones } from "../../data/usuarios";

export const Regiones = (props) => {
  return (
    <FormControl fullWidth variant="filled" sx={{ mt: 3 }}>
      <TextField
        variant="filled"
        id="lbl_region"
        select
        
        {...props}
      >
        {regiones.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.nombre}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};
