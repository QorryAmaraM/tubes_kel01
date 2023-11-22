// ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product detail:', error);
      }
    };
    

    

    fetchProductDetail();
  }, [id]);

  return (
    <div className='product-detail-container'>
      <h1 className='product-detail-header'>Product Detail Page</h1>
      {product ? (
        <div className='product-detail-content'>
          <h2 className='product-title'>{product.title}</h2>
          <p className='product-description'>{product.description}</p>
          <p className='product-price'>Price: ${product.price}</p>
          <img src={product.images[2]} alt={product.title} className='product-image'/>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
};

export default ProductDetailPage;
