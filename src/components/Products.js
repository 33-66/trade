import './Products.css';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './Filter';
import CartButton from './CartButton';
//import Cart from './ShoppingCart';

function Products() {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        fetch("https://category-zfcn.onrender.com/products")
            .then(response => response.json())
            .then((data) => {
                setData(data);
                const uniqueCategories = [...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    function handleQuantity(item) {
        const itemToUpdate = data.find(dataItem => dataItem.id === item.id);

        if (itemToUpdate && itemToUpdate.quantity > 0) {
            const updatedData = data.map(dataItem => {
                if (dataItem.id === item.id) {
                    return { ...dataItem, quantity: dataItem.quantity - 1 };
                }
                return dataItem;
            });
            setData(updatedData);
        }
    }
    
    const filteredData = selectedCategory ? data.filter(item => item.category === selectedCategory) : data;

    return (
        <div className="products-container">
            <h1>Products</h1>
            <CartButton />
            <div className="centered-search">
                <SearchBar data={data} />
            </div>
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />
            <ul className="product-list">
                {filteredData.map((item) => (
                    <li key={item.id} className="product-item">
                        <span style={{ color: "darkgrey" }}><h4>{item.name}</h4></span>
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
                        <button onClick={() => handleQuantity(item)} className="add-to-cart-btn">
                            Add To Cart
                        </button>
                    </li>
                ))}
            </ul>
            {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
        </div>
    );
}

export default Products;
