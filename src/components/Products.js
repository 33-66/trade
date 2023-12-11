import React, { useState, useEffect } from 'react';
import CartButton from "./CartButton";
import SearchBar from './SearchBar';
import CategoryFilter from './Filter';
import "./Products.css";

function Products({ products, addToCart }) {
    const [loading, setLoading] = useState(true); // Initialize loading state

    const categories = [...new Set(products.map((item) => item.category))];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filterByCategory = (category) => {
        if (category === 'All') {
            return products;
        }
        return products.filter((item) => item.category === category);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        // Simulate loading delay using setTimeout (replace with your actual backend fetch)
        const timeout = setTimeout(() => {
            setLoading(false); // Set loading to false after a delay (replace with your fetch logic)
        }, 2000); // Adjust this timeout value as needed

        return () => clearTimeout(timeout); // Clean up timeout on component unmount
    }, []);

    return (
        <div className="products-container">
            <h1>Products</h1>

            <div className="centered-search">
                <SearchBar data={products} />
            </div>
            <div>
               <CartButton /> 
            </div>

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryChange}
            />

            {loading ? (
                <div
                className="loading-container">
                    <div className="spinner"></div>
                
                    <p>Loading...</p>
                    </div>
            ) : (
                <ul className="product-list">
                    {filterByCategory(selectedCategory).map((item) => (
                        <li key={item.id} className="product-item">
                        <span style={{ color: "darkgrey" }}>
                            <h4>{item.name}</h4></span>
                        <br />
                        <img
                            src={item.image}
                            alt="Product"
                            className="product-image"
                        />
                        <br />
                        <strong>Description:</strong> {item.description}
                        <br />
                        <strong>Price:</strong> {item.price}
                        <br />
                        <strong>Quantity:</strong> {item.quantity}
                        <br />
                        <strong>Category:</strong>{item.category}
                        <br></br>
                        <button className="add-to-cart-btn" onClick={addToCart}>
                            Add To Cart
                        </button>
                    </li> 
                    ))}
                </ul>
            )}

        </div>
    );
}

export default Products;
