import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IndexPage from './pages/IndexPage';
import FormPage from './pages/FormPage';
import ProductDetails from './pages/ProductDetails'; 
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 

      <div className="main-content">
        <Routes>
          {/* 1. Page de Index Pagina principal */}
          <Route path="/" element={<IndexPage />} />

          {/* 2. Page con Formulario */}
          <Route path="/contacto" element={<FormPage />} />
          
          {/* 3. Ruta Dinámica */}
          {/* slug es el parámetro dinámico /producto/martillo */}
          <Route path="/producto/:slug" element={<ProductDetails />} />
          
          <Route path="*" element={<h1>Herramienta No Encontrada</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;