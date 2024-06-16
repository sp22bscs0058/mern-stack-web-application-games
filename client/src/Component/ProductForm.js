import React, { useState } from 'react';
import axios from 'axios';


const ProductForm = () => {


  const [Product, setProduct] = useState({ name: '', description: '', price: '', category: '' });

  const ProductnHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...Product, [name]: value });
  };

  const innerProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/addproduct', Product);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={innerProduct} className="form-container">
      <h1 className="mt-3">ADD PRODUCT</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="name"
          value={Product.name}
          onChange={ProductnHandler}
          placeholder="Enter Product Name"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="description"
          value={Product.description}
          onChange={ProductnHandler}
          placeholder="Enter Product Description"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="price"
          value={Product.price}
          onChange={ProductnHandler}
          placeholder="Enter Product Price"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="category"
          value={Product.category}
          onChange={ProductnHandler}
          placeholder="Enter Product Category"
        />
      </div>
      <button type="submit" className="btn-primary">submit</button>
    </form>
  );
};

export default ProductForm;
