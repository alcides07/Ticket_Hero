import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Register from './features/Register';
import Login from './features/Login';
import Home from './features/Home';
import CompraIngresso from './features/CompraIngresso';
import CriarEvento from './features/CriarEvento';
import EditarEvento from './features/EditarEvento';
import VisualizarEvento from './features/VisualizarEvento';
import MeusIngressos from './features/MeusIngressos';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/evento/:id/" element={<VisualizarEvento/>} />
                <Route path="/evento/:id/compra" element={<CompraIngresso/>} />
                <Route path="/evento/criar" element={<CriarEvento/>} />
                <Route path="/evento/:id/editar" element={<EditarEvento/>} />
                <Route path="/meusIngressos" element={<MeusIngressos/>} />
            </Routes>
        </BrowserRouter>
    );
  };
  

export default Rotas;
