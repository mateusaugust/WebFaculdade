import {Box,TextField, Typography, Button}from '@mui/material';
import { useState } from 'react';

import Descricao from './components/Descricao';
import SobreBaseDados from './components/SobreBaseDados';
import SobreAplicacao from './components/Sobreaplicacao';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Card from '@mui/material/Card';


function App() {
  const [age, setAge] = useState(0);
  const [relationShip,setRelationShip] = useState(0);
  const [inactive,setInactive] = useState(0);
  const [creditLimit,setCreditLimit] = useState(0);
  const [transAmt,setTransAmt] = useState(0);
  const [avgRatio,setAvgRatio] = useState(0);
  const [cor, setCor] = useState('white');
  const [nameCluster, setNameCluster] = useState('Nenhum Cluster')

  const CardComponent = ({ clusterName}) => {
    return (
      <React.Fragment>
        <CardContent  >
          <Typography component="div">
            {clusterName}
          </Typography>
        </CardContent>
      </React.Fragment>
    );
  };

  const calc = (e)=> {
    function normalizeMinMax(value, minValue, maxValue) {
      return (value - minValue) / (maxValue - minValue);
    }
  
    const normalizeAge = normalizeMinMax(age, 26, 73).toFixed(3);
    const normalizeRelationShip = normalizeMinMax(relationShip, 1,6).toFixed(3);
    const normalizeInactive = normalizeMinMax(inactive, 0,6).toFixed(3);
    const normalizeCreditLimit = normalizeMinMax(creditLimit,1438.3,34516).toFixed(3);
    const normalizeTransAmt = normalizeMinMax(transAmt,510,18484).toFixed(3);
    const normalizeAvgRadio =  normalizeMinMax(avgRatio,0,0.999).toFixed(3);
    

    function euclideanDistance(a1, a2, r1, r2, m1, m2, c1, c2, t1, t2, g1, g2) {
      const deltaX1 = a2 - a1;
      const deltaY1 = r2 - r1;
    
      const deltaX2 = m2 - m1;
      const deltaY2 = c2 - c1;
    
      const deltaX3 = t2 - t1;
      const deltaY3 = g2 - g1;
    
      const distance1 = Math.sqrt(Math.pow(deltaX1, 2) + Math.pow(deltaY1, 2));
      const distance2 = Math.sqrt(Math.pow(deltaX2, 2) + Math.pow(deltaY2, 2));
      const distance3 = Math.sqrt(Math.pow(deltaX3, 2) + Math.pow(deltaY3, 2));
    
      const totalDistance = distance1 + distance2 + distance3;
    
      return totalDistance;
    }

    const cluster0 =  euclideanDistance(normalizeAge, 0.431,normalizeRelationShip, 0.661, normalizeInactive, 0.391,
      normalizeCreditLimit, 0.036, normalizeTransAmt, 0.166, normalizeAvgRadio, 0.649);

    const cluster1 =  euclideanDistance(normalizeAge, 0.428,normalizeRelationShip, 0.816, normalizeInactive, 0.388,
        normalizeCreditLimit, 0.186, normalizeTransAmt, 0.159, normalizeAvgRadio, 0.123);

    const cluster2 =  euclideanDistance(normalizeAge, 0.432,normalizeRelationShip, 0.484, normalizeInactive, 0.383,
        normalizeCreditLimit, 0.824, normalizeTransAmt, 0.284, normalizeAvgRadio, 0.043);
    
    const cluster3 =  euclideanDistance(normalizeAge, 0.439,normalizeRelationShip, 0.245, normalizeInactive, 0.395,
        normalizeCreditLimit, 0.149, normalizeTransAmt, 0.293, normalizeAvgRadio, 0.188);

    const array = [cluster0, cluster1, cluster2, cluster3];
    const menor = Math.min(...array);
      
    if(menor === cluster0){
      setCor("#00a518");
      setNameCluster("Cluster-0");
    }else if(menor === cluster1){
      setCor("#005499");
      setNameCluster("Cluster-1");
    }else if(menor === cluster2){
      setCor("#caf609");
      setNameCluster("Cluster-2");
    }else if(menor === cluster3){
      setCor("#df2416");
      setNameCluster("Cluster-3");
    }
  }

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
     
    }}>
      
      <Box sx={{mt:"10px"}}>
        <Typography variant="h3" gutterBottom>
          Clustering
        </Typography>
      </Box>

        <Box sx={{width:"800px",display:"grid", gridTemplateColumns: "1fr 1fr",
         gap:"10px", mt:"20px", mb:"25px"}}>
          <TextField onChange={(e)=> setAge(parseFloat(e.target.value))} label="Idade do Cliente (Customer_Age)" variant="filled" color="info" focused/>
          <TextField onChange={(e)=>setRelationShip(parseFloat(e.target.value))} label="Contagem Total de Relacionamentos (Total_Relationship_Count)" variant="filled" color="info" focused />
          <TextField onChange={(e)=> setInactive(parseFloat(e.target.value))} label="Meses de Inatividade(Months_Inactive_12_mon)" variant="filled" color="info" focused />
          <TextField onChange={(e)=> setCreditLimit(parseFloat(e.target.value))}label="Limite de Crédito (Credit_Limit)" variant="filled" color="info" focused />
          <TextField onChange={(e)=> setTransAmt(parseFloat(e.target.value))} label="Valor Total das Transações(Total_Trans_Amt)" variant="filled" color="info" focused />
          <TextField onChange={(e)=> setAvgRatio(parseFloat(e.target.value))} label="Razão Média de Utilização do Crédito (Avg_Utilization_Ratio)" variant="filled" color="info" focused />
        </Box>

        <Box>
          <Button onClick={calc}variant="contained" disableElevation>
              Encontrar Cluster
          </Button>
        </Box>

        <Box sx={{mt:"25px"}}>
        <Box>
       
        <Card variant="outlined" sx={{ backgroundColor:cor, width:"190px", textAlign:"center" }}>
          <CardComponent clusterName={nameCluster} />
        </Card>

        </Box>
      </Box> 

        <Descricao/>
        <SobreBaseDados/>
        <SobreAplicacao/>
    </Box> 
  );
}

export default App;
