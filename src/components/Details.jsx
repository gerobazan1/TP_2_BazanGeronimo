import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Details.css';

const Details = () => {
  const { id } = useParams();  
  const [product, setProduct] = useState(null);  

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        console.log('Producto cargado:', response.data);  
        setProduct(response.data);  
      })
      .catch(error => console.error(error));  
  }, [id]);  

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleBuy = () => {
    alert('Producto comprado!');  
  };

  return (
    <div className="details-container">
      <h2>{product.title}</h2>  
      <img src={product.image} alt={product.title} />  
      <p><strong>Price:</strong> ${product.price}</p>  
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p> 
      <button className="buy-button" onClick={handleBuy}>Comprar</button> 
    </div>
  );
};

export default Details;
