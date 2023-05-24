import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert } from '@mui/material';
import Box from '@mui/material/Box';


function Tabela(){
  function createData(variable, coeff, std, tvalue, p) {
    return { variable, coeff, std, tvalue, p };
  
  }
  
  const rows = [
    createData('id', -781.285 , 304.7026, -2.5641, 0.0181),
    createData('id^2', 38.8579, 44.6967, 0.8694, 0.3945),
    createData('id^3', -0.6167, 2.4654, -0.2501, 0.8049),
    createData('id^4', -0.0016, 0.0453, -0.0348, 0.9726),
    createData('Intercept', 9842.2768, 618.8369, 15.9045, "3.46E-13"),
  ];
return(
  <Box>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Variable</TableCell>
        <TableCell align="right">Coeff.</TableCell>
        <TableCell align="right">Std. Err.&nbsp;</TableCell>
        <TableCell align="right">t-value&nbsp;</TableCell>
        <TableCell align="right"> P{'>'}|t|&nbsp;</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.variable}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.variable}
          </TableCell>
          <TableCell align="right">{row.coeff}</TableCell>
          <TableCell align="right">{row.std}</TableCell>
          <TableCell align="right">{row.tvalue}</TableCell>
          <TableCell align="right">{row.p}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

<Alert variant="outlined" severity="info" 
  sx={{
    borderColor:'white',
    color:'white',
    backgroundColor:"#1d2440",
    alignItems:"center",
    mt:'10.1rem'
  }}
>
R-Squared: 0.9009
{<br/>}
Adjusted R-Squared: 0.882
</Alert>  
</Box>


)
}

export default Tabela