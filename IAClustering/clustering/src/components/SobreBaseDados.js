import {Box, Typography}from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function SobreBaseDados(){
  function createData(name, calories, fat) {
    return { name, calories, fat };
  }

  const rows = [
    createData('Atributos Base', 22, 10127),
    createData('Atributos Usados', 6, 10127),
    
  ];
  return(
    <Box sx={{borderTop: '1px solid #1574B6', width:"800px", mt:"30px", textAlign:"center"}}>
    <Box sx={{mt:"10px"}}>
    <Typography variant="h6" gutterBottom>
        Sobre a Base de Dados
    </Typography>
    <Box sx={{textAlign:"center", mb:"15px"}}>
      <p>
        Este conjunto de dados contém informações detalhadas sobre os clientes de 
        uma carteira de cartões de crédito de consumo. Ele fornece dados demográficos 
        abrangentes, como idade, sexo, estado civil e categoria de renda. Além disso, 
        inclui informações sobre o relacionamento dos clientes com a operadora do cartão, 
        como tipo de cartão, tempo de permanência na carteira e períodos de inatividade. 
        Também possui dados cruciais sobre o comportamento de gastos dos clientes, como 
        saldo rotativo, limite de crédito, taxa média de abertura para compra e métricas 
        analisáveis. Esses dados podem ajudar os analistas a prever o churn (cancelamento)
        dos clientes e oferecer insights valiosos para gerenciar o portfólio ou atender
        clientes individuais, identificando a estabilidade da conta a longo prazo ou 
        uma possível saída iminente.
      </p>
    </Box> 

    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="">
          <TableHead>
            <TableRow>
              <TableCell>...</TableCell>
              <TableCell align="right">Colunas</TableCell>
              <TableCell align="right">Linhas&nbsp;</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

    <Box>
      <Link
        sx={{mt:"30px", mb:"30px", backgroundColor:"#1574B6", color:"white", borderRadius:"10px", width:"170px"}}
        component="button"
        variant="body2"
        onClick={() => {
          window.open('https://www.kaggle.com/datasets/thedevastator/predicting-credit-card-customer-attrition-with-m', '_blank');
        }}
      >
        Link da Base de Dados
      </Link>
    </Box>
  </Box>
</Box>
  );
}

export default SobreBaseDados;