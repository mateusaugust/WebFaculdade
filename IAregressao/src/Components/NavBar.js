import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalculateIcon from '@mui/icons-material/Calculate';
import TableChartIcon from '@mui/icons-material/TableChart';

import { useNavigate } from 'react-router-dom';

export default function NavBAr() {
  const [value, setValue] = React.useState('calculo');
  const navigate = useNavigate();

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  
  };

  return (
    <BottomNavigation sx={{backgroundColor:'#1d2440', width:'auto', 
    height:'70px' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Calculo"
        value="calculo"
        onClick={() => navigate("/calculo")}
        icon={<CalculateIcon sx={{color:'#fdbf5c'}}/>}
       
      />
      <BottomNavigationAction
        label="Tabela"
        value="favorites"
        color="#fdbf5c"
        icon={<TableChartIcon sx={{color:'#fdbf5c'}}/>}
        onClick={() => navigate("/tabela")}
      />
      <BottomNavigationAction
        label="Grafico"
        value="grafico"
        color="#fdbf5c"
        icon={<AssessmentIcon sx={{color:'#fdbf5c'}}/>}
        onClick={() => navigate("/grafico")}
      />
    
    </BottomNavigation>
  );
}
