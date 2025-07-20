import React, { useState, useEffect } from 'react';

function Scholarships() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://go.postman.co/workspace/674a335c-7ffa-4966-8529-cab135868bba/documentation/46900267-6f218a6e-5f89-4b3d-bcc7-2ea1fec8824c?entity=request-9d3912ee-cd9b-41c1-81a0-88dcc7cbcb58')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setItems(data);
                } else {
                    console.error("Expected an array but got:", data);
                    setItems([]); // fallback to empty array
                }
            })
            .catch(error => console.error('Error:', error));
        setItems([]);
    }, []);

    return (
        <div className='ScholarshipsPage'>
            <h1 className='ScholarshipsTitle'>Scholarships</h1>
            <p className='ScholarshipsDescription'>Here you can find Scholarships opportunities that
                are suitable for first-generation college students.</p>
            {items.map(item => (
                <div key={item.id} data-testid={`item-${item.id}`}>
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default Scholarships;