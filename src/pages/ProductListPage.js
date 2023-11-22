// ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../pages/ProductListPage.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='product-list-container'>
      <h1 className='product-list-header'>Product List</h1>
      <ul className='product-list'>
        {currentProducts.map((product) => (
          <li key={product.id} className='product-item'>
            <Link to={`/products/${product.id}`}>
              <h2 style={{ cursor: 'pointer', textDecoration: 'none !important' }} className='product-title' >
                {product.title}
              </h2>
            </Link>
            <p className='product-description'>{product.description}</p>
            <p className='product-price'>Price: ${product.price}</p>
            <img src={product.images[0]} alt={product.name} style={{ maxWidth: '100px' }} className='product-image'/>
          </li>
        ))}
      </ul>
      <div className='pagination'>
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className='pagination button'>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    
  );
};

export default ProductList;
