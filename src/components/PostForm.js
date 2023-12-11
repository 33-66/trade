
import './form.css';
import React, { useState } from 'react'
function PostForm() {
    const [data, setData] = useState({

        productName: "",
        image: "",
        description: "",
        price: "1",
        quantity: "1",
        category: "choose"

    })
    function handleChange(e) {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();

        const apiUrl = "https://homy-6bvz.onrender.com/products";

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Product data submitted successfully');
                    alert('Product data submitted successfully');

                    // Reset the form after successful submission
                    setData({

                        productName: "",
                        image: "",
                        description: "",
                        price: "1",
                        quantity: "1",
                        category: "choose"


                    });
                } else {
                    console.error('Failed to submit  product');
                    alert('Failed to submit property product');
                }
            })
            .catch((error) => {
                console.error('Error submitting product data:', error);
                alert('Error submitting product data');
            });
    }




    return (
        <>
        {/* <figure>
            <img 
            style={{
                width:"200px",
                height:"200px"
            }}
            src="https://cdn.pixabay.com/photo/2016/03/05/21/21/agree-1238964_1280.jpg"
             alt="Try again" />
        </figure> */}
            <div className="form-container"
            style={{
                height:"78vh"
            }}
            
            >

               


                <form className="post-form" action="" method="post" onSubmit={handleSubmit}>
                    <label htmlFor="">
                        <strong>Product</strong>
                        <input
                            type="text"
                            name='productName'
                            placeholder='write the name of your product'
                            value={data.productName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor="Image">
                        <strong>Image URL:</strong>
                        <input
                            type="url"
                            name="image"
                            placeholder="Enter the URL of your property image"
                            value={data.image}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Description
                        <input
                            type="text"
                            name='description'
                            placeholder='Describe your  product'
                            value={data.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        price
                        <input
                            type="number"
                            name='price'
                            placeholder='give us your price'
                            value={data.price}
                            onChange={handleChange}
                            min={1}
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Quantity
                        <input
                            type="number"
                            name="quantity"
                            value={data.quantity}
                            onChange={handleChange}
                            min={1}
                            required
                        />
                    </label>
                    <br />
                    <label htmlFor="">
                        Category
                        <select
                            name="category"
                            value={data.category}
                            onChange={handleChange}
                            required
                        >
                            
                            <option value="clothing">clothing</option>
                            <option value="electronics">electronics</option>
                            <option value="vehicles">vehicles</option>
                            <option value="furniture">furniture</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Jewwelery accesories">Jewwelery accesories</option>
                            <option value="Food and Beverages">Food and Beverages</option>
                            <option value="Toys and games">Toys and games</option>
                            <option value="pet supplies">pet supplies</option>
                            <option value="sports and outdoors">sports and outdoors</option>
                            <option value="Books and  stationary">Books and  stationary</option>
                            <option value="Health">Health</option>
                            <option value="others">others</option>
                        </select>

                    </label>
                    <br />
                    <button className="submit-button">post</button>
                </form>
            </div>
        </>
    )
}

export default PostForm