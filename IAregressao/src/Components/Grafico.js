import * as React from 'react';


import Button from '@mui/material/Button';

import imagem from "./imagem1.png"
import imagem2 from "./scallet2.png"

import styles from "./styles.css"
import { Dialog, Box } from '@mui/material';




function Grafico(){
    const [img,setImg] = React.useState(imagem)
    const [open, setOpen] = React.useState(false);
    const handleOpen = (imgP) => {
      setImg(imgP)
      setOpen(true)
    };
    const handleClose = () => setOpen(false);

  return (
    <Box sx={{
      display:'flex',
      flexDirection:"column",
      justifyContent: 'center',
      alignItems: 'center',
      height:'calc(100vh - 70px)'}}>

     
        <Button 
        variant='contained'
        sx={{backgroundColor:'#1d2440',height:"50px", width:'400px'}}
        onClick={()=>handleOpen(imagem)}>Polynomial Regression Scallet Plot</Button>

        <Button 
        variant='contained'
        sx={{backgroundColor:'#1d2440',height:"50px", width:'400px', mt:"10px"}}
        onClick={()=>handleOpen(imagem2)}>Scallet Plot(Local)</Button>
     

    <Dialog
      PaperProps={{sx:{width:"1200px"}}}
      maxWidth="xl"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
     
        <img className={styles.img} src={img} alt='teste'/> 
     
    </Dialog> 


  </Box> 
  
  );
}

export default Grafico