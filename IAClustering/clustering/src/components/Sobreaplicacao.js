import {Box, Typography}from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import * as React from 'react';



const CardComponent = ({ clusterName, cor }) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography component="div" >
          {clusterName}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};


function SobreAplicacao(){
  
    function createData(name, calories, fat) {
      return { name, calories, fat };
    }
  
    const rows = [
      createData('3', 0.232, 0.231),
      createData('4', 0.242, 0.235),
      createData('5', 0.241, 0.214),
      createData('6', 0.228, 0.224),
      createData('7', 0.23, 0.195), 
    ];
  return(
    <Box sx={{borderTop: '1px solid #1574B6', width:"800px", textAlign:"center"}}>
      <Typography sx={{mt:"10px"}} variant="h6" gutterBottom>
          Sobre essa aplicação
      </Typography>

      <Box sx={{textAlign:"left"}} >
        <p>
          Essa aplicação serve para identificar o grau de valor de um determinado cliente, isso é interessante para 
          um banco por várias razões:
        </p>
        <ul>
          <li>Estratégias de marketing personalizadas: Ao segmentar os clientes em 
            diferentes grupos de valor, o banco pode adaptar suas estratégias de marketing 
            de forma mais eficaz. Clientes de alto valor podem ser alvo de ofertas 
            especiais e programas de fidelidade, enquanto clientes de médio valor podem 
            ser direcionados com campanhas para aumentar seu engajamento. Por outro lado,
            clientes de baixo valor podem ser abordados com incentivos para aumentar suas 
            atividades e promover sua retenção.
          </li><br></br>

          <li>
            Gestão de riscos: A segmentação de clientes por valor também é útil para 
            a gestão de riscos. Clientes de alto valor podem ter um perfil de risco 
            diferente e requerer medidas de segurança adicionais para proteger suas 
            contas e transações. Além disso, a identificação de clientes de baixo valor 
            pode ajudar o banco a identificar potenciais riscos de inadimplência ou comportamento 
            fraudulento.
          </li><br></br>

          <li>
            Otimização de recursos: Ao identificar os clientes de alto valor, o banco pode concentrar 
            seus recursos e esforços em atender e satisfazer esses clientes de maneira mais eficiente. 
            Isso pode envolver oferecer serviços exclusivos, fornecer um suporte personalizado e garantir 
            uma experiência excepcional para esses clientes valiosos. Ao mesmo tempo, identificar clientes 
            de baixo valor pode ajudar o banco a avaliar se vale a pena investir em retenção ou realocar recursos 
            para clientes mais lucrativos.
          </li><br></br>

          <li>
            Decisões estratégicas: A análise dos diferentes grupos de clientes com base em seu valor pode fornecer 
            insights estratégicos importantes para o banco. Isso inclui identificar tendências de mercado, compreender 
            a demanda por produtos e serviços, ajustar a segmentação de mercado e direcionar esforços de expansão para os 
            segmentos mais promissores e lucrativos.
          </li>
        </ul>

        <p>
          Portanto, identificar o grau de valor de seus clientes permite ao banco tomar decisões mais informadas e direcionadas, 
          melhorar a satisfação do cliente, aumentar a retenção e impulsionar a receita geral da instituição financeira.
        </p>
      </Box>

      <Box sx={{mt:"25px"}}>
        <Typography  variant="h6" gutterBottom>
            Coeficientes(Overall)
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="">
          <TableHead>
            <TableRow>
              <TableCell>Numero de Clusters(k)</TableCell>
              <TableCell align="right">K-Means</TableCell>
              <TableCell align="right">K-Medoids</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              >
                <TableCell component="th" scope="row" >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{mt:"30px",mb:"15px"}}>
          <Typography  variant="h6" gutterBottom>
              Clusters
          </Typography>
        </Box>

      <Box sx={{display:"flex", justifyContent:"center", mb:"30px"}}>
        <Box sx={{ maxWidth: "500px"  ,display:"flex" }}>
        <Card variant="outlined" sx={{ backgroundColor: '#00a518'}}>
          <CardComponent clusterName="Cluster_0" />
        </Card>
        <Card variant="outlined" sx={{ backgroundColor: '#005499',ml:"10px" }}>
          <CardComponent clusterName="Cluster_1" />
        </Card>
        <Card variant="outlined" sx={{ backgroundColor: '#caf609',ml:"10px"  }}>
          <CardComponent clusterName="Cluster_2" />
        </Card>
        <Card variant="outlined" sx={{ backgroundColor: '#df2416' ,ml:"10px" }}>
          <CardComponent clusterName="Cluster_3" />
        </Card>

        </Box>
      </Box>    
    </Box>
  );
}

export default SobreAplicacao;