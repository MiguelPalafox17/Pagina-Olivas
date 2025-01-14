import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Principal} from "./Body/Body";
import {Menu} from "./Menu/Menu";
import { Validar_Sesion } from "./Inicio de Sesion/Validar Inicio de sesion";
import {Footer} from "./Footer/Footer";
import {Galeria} from "./Galeria/Galeria";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Menu/>}>
            <Route path='Iniciar_Sesion' element={<Validar_Sesion/>}/>
            <Route path='/' element={<Principal/>}/>
            <Route path='Galeria' element={<Galeria/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
