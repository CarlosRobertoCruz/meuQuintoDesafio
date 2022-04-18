import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './Pages/Home/Home';
import { Usuario } from './Pages/Usuario/usuario';
import { Filmes } from './Pages/Filmes/filmes';
import { Genero } from './Pages/Generos/genero';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Rotas = ():JSX.Element => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Usuario />} path='/Usuario' />
        <Route element={<Filmes />} path='/Filmes' />
        <Route element={<Genero />} path='/Generos' />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);


