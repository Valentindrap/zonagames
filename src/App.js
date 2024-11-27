import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PaginaPrincipal from './componentes/PaginaPrincipal';
import CargaLogin from './componentes/CargaLogin';
import PestañaJuegos from './componentes/PestañaJuegos';
import Perfil from './componentes/perfil';

function App() {
  function alerta() {
    alert('La pagina funciona entera pero, la base de datos para el registro se encuentra desactivada, para redurcir costos al mantener el proyecto en linea');
  }

  alerta();
  return(
    <div className='app'>

        <BrowserRouter>

          <Routes>

            <Route path='/' element={<PaginaPrincipal/>}/>
            <Route path='/CargaLogin' element={<CargaLogin/>}/>
            <Route path="/juego/:id" element={<PestañaJuegos/>} />
            <Route path='/perfil' element={<Perfil/>} />

          </Routes>

        </BrowserRouter>

    </div>
  )
}

export default App;
