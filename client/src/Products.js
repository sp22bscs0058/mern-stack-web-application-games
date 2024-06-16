import React from 'react';
import ProductForm from './Component/ProductForm';
import ProductList from './Component/ProductList';

function Productss() {
  return (
    <div className="productss">
      <div className="products">
        <div className="row">
          <div className="col-md-6 ProductForm">
            <ProductForm />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 Productlist">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productss;
