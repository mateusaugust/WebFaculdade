import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import NavBar from './Components/NavBar';

import Calculo from "./Components/Calculo";
import Grafico from "./Components/Grafico";
import Tabela from "./Components/Tabela";

function App() {
  return (
   <Router>
      <NavBar/>
        <Routes>
          <Route exact path ="/" element={<Calculo/>}/>
          <Route exact path ="/calculo" element={<Calculo/>}/>
          <Route exact path ="/grafico" element={<Grafico/>}/>
          <Route exact path ="/tabela" element={<Tabela/>}/>
        </Routes>
       </Router>
  );
}

export default App;
