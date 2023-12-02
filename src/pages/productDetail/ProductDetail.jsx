import React from 'react';
import { Link } from 'react-router-dom';
import './productDetail.css'

export default function ProductDetail() {
  return (
    <div className='productDetail'>
        <div className="productDetailContainer">
            <h1 className='productDetailTitle'>Product</h1>
            <Link to='/newProduct'>
                <button className='productDetailBtn'>
                   Create
                </button>
            </Link>
        </div>
        <div></div>
     
    </div>
  );
}
