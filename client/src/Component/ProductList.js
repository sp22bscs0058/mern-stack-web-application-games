import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ _id: '', name: '', description: '', price: '', category: '' });
  const [error, setError] = useState(null);

  const productChangeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/readAllProducts');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      setError('Failed to fetch products. Please try again later.');
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
      setError('Failed to delete product. Please try again later.');
    }
  };

  const updateHandler = (product) => {
    setProduct(product);
    setError(null); 
  };

  const submitUpdateProduct = async (id) => {
    if (!product.name || !product.description || !product.price || !product.category) {
      setError("All fields are required.");
      return;
    }
    try {
      await axios.put(`http://localhost:5000/update/${id}`, product);
      setProduct({ _id: '', name: '', description: '', price: '', category: '' }); 
    } catch (error) {
      console.log(error);
      setError('Failed to update product. Please try again later.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <div className="content-container">
        <div className="form-container">
          <div className="modal fade" id="editProductModal" tabIndex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="editProductModalLabel">Edit Product</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  {error && <p className="text-danger">{error}</p>}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={product.name}
                      onChange={productChangeHandler}
                      placeholder="Enter Product Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      value={product.description}
                      onChange={productChangeHandler}
                      placeholder="Enter Product Description"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={product.price}
                      onChange={productChangeHandler}
                      placeholder="Enter Product Price"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="category"
                      value={product.category}
                      onChange={productChangeHandler}
                      placeholder="Enter Product Category"
                    />
                  </div>
                  <button type="submit" onClick={() => submitUpdateProduct(product._id)} data-bs-dismiss="modal" aria-label="Close" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-list-container">
          <ul className="list-group">
            <h1>PRODUCT LIST</h1>
            {products.map((product) => (
              <li key={product._id} className="list-group-item list-group-item-success d-flex justify-content-between align-items-center">
                {product.name} - ${product.price}
                <span>
                  <i className="fas fa-pen mx-2" data-bs-toggle="modal" data-bs-target="#editProductModal" onClick={() => updateHandler(product)}></i>
                  <i className="fas fa-trash mx-2" onClick={() => deleteHandler(product._id)}></i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
