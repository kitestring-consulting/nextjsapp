import React from 'react';
import data from '../products.json'

const ProductList = () => {

    return (
        <div>
            <h1>Product List</h1>
            <select>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Home & Garden">Home & Garden</option>
            </select>
            <ul>
                <li key="fakeproduct">Fake Product - $55</li>
            </ul>
        </div>
    );
};

export default ProductList;