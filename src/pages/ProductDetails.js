
import React from 'react';
import { useParams } from 'react-router-dom';

import { getProductBySlug } from '../data/productsData'; 

const ProductDetails = () => {
  const { slug } = useParams();

  const product = getProductBySlug(slug); 

  if (!product) {
    return <h2>Producto "{slug}" no encontrado en el catálogo.</h2>;
  }

  // Simulamos el estado de stock
  const isInStock = product.id % 2 === 0;

  return (
    <div className="page-detail">
      <h1>Detalles de: {product.name}</h1>
      <p className="detail-desc">{product.description}</p>
      
      <div className="card-image-container-detail">
        <img src={product.image} alt={product.name} className="card-image" />
      </div>

      <p className={`stock-status ${isInStock ? 'in-stock' : 'out-stock'}`}>
        Estado: {isInStock ? 'En Stock' : 'Agotado'}
      </p>
      
      <p className="price-detail">Precio: ${product.price.toLocaleString('es-CL')}</p>
    </div>
  );
};

export default ProductDetails;