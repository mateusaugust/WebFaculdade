import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useState} from 'react';




function Calculo(){
  const [teste, setTest] = useState('0');

  

  const calculo = (e) =>{
    if(teste<=2021){
      alert('Escolha um ano acima de 2021')
    }else{
      const ano = (teste-1996)+1

      
      const result = Math.pow(ano,1) * -781.285 + 
      Math.pow(ano,2) * 38.857 + Math.pow(ano,3) * -0.616 +
      Math.pow(ano,4)* -0.0015  + 9842.276847

      if(result>=0){
        alert(result.toFixed(0))
      }else{
        alert('0')
      }
     
    }

  
  }

  return(
    <Box 
    sx={{
      mt:'13.5%',
      display:'flex',
      alignItem:'center',
      justifyContent:'center'
      }}>

    <Button 
      variant="contained"
      sx={{
        backgroundColor:'#1d2440',
        mr:'4px'
      }}
      onClick={calculo}  
    >
      Calcular</Button> 

      <TextField 
      id="outlined-basic" 
      label="Ano" 
      variant="outlined" 
      onChange={(e)=>setTest(parseFloat(e.target.value))}
      />

     
    </Box>
  );
}

export default Calculo