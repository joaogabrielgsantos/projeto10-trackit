import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/styles/reset.css'
import PaginaCadastro from './PaginaCadastro';
import PaginaHabitos from './PaginaHabitos';
import PaginaHistorico from './PaginaHistorico';
import PaginaHoje from './PaginaHoje';
import PaginaLogin from './PaginaLogin';


function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaLogin />} />
                    <Route path="/cadastro" element={<PaginaCadastro />}/>
                    <Route path="/habitos" element={<PaginaHabitos />}/>
                    <Route path="/hoje" element={<PaginaHoje />}/>
                    <Route path="/historico" element={<PaginaHistorico />}/>
                </Routes>
            </BrowserRouter>
        );
}

export default App;