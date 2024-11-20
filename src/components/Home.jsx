import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home-container">
      <h2>Home</h2>
      <div className="cards-container">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/details/${product.id}`} className="details-button">
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
