import React from 'react';
import { Link } from 'react-router-dom';

import { products } from '../data/productsData'; 

const IndexPage = () => {
  
  return (
    <div className="page-index">
      <h1>¡Bienvenido a la Ferretería!</h1>
      <p className="intro">Aquí encontrarás las herramientas de la mejor calidad para tus proyectos.</p>
      
      <h3>Catálogo Destacado</h3>
      
      <div className="product-list product-grid"> 

        {products.map((product) => (
          <div key={product.id} className="product-card">
            
            <div className="card-image-container">
              <img src={product.image || '/images/default.jpg'} alt={product.name} className="card-image" />
            </div>
            
            <h4>{product.name}</h4>
            <p className="price">${product.price.toLocaleString('es-CL')}</p>
            
            <Link to={`/producto/${product.slug}`} className="btn-detail">Ver Detalles →</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;