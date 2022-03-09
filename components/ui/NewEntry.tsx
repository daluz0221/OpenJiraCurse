import { Box, Button, TextField } from "@mui/material";

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


export const NewEntry = () => {
  return (
    <Box sx={{marginBottom: 2, paddingX: 2}}>

    <Button
        startIcon={<AddCircleOutlineOutlinedIcon />}
        fullWidth
        variant="outlined"
    >
        Agregar Tarea
    </Button>


    <TextField 
        fullWidth
        sx={{marginTop: 2, marginBottom: 1}}
        placeholder="Nueva entrada"
        autoFocus
        multiline
        label='Nueva entrada'
        helperText="Ingrese un valor"
    />

    <Box display="flex" justifyContent="space-between">

        <Button
            variant="outlined"
            color="secondary"
            endIcon={<SaveOutlinedIcon />}
            >
            Guardar
        </Button>

        <Button
            variant="text"
            
            >
            Cancelar
        </Button>
    
    </Box>
    
    </Box>
  )
}
