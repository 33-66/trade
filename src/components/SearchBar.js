import React, { useState } from 'react';

const SearchBar = ({ data }) => {

    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = () => {
        const searchTerm = input.toLowerCase();

        if (searchTerm.trim() === '') {
            setFilteredData([]);
        } else {
            const filtering = data.filter((item) =>
                (item.name || '').toLowerCase().includes(searchTerm)
            );

            if (filtering.length === 0) {
                alert("Sorry, we don't have those  products thanks.");
            }

            setFilteredData(filtering);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>
                    <strong>Name:</strong> {item.name} <br />
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ maxWidth: '500px', maxHeight: '500px' }}
                      />
                    )}
                    <br />
                    <strong>Description:</strong> {item.description} <br />
                    <strong>price:</strong> {item.price} <br />
                    <strong>quantity:</strong> {item.quantity} <br />
                    <strong>category:</strong> {item.category} <br />
                    
                  </li>
                ))}
            </ul>
           
        </div>
    );
};

export default SearchBar;