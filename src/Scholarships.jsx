import React, { useState, useEffect } from 'react';
import './Scholarships.css';

function Scholarships() {
    const [scholarships, setScholarships] = useState([]);

    useEffect(() => {
        fetch('https://5347fd07-56f5-4b47-8de5-7c172b42125a.mock.pstmn.io/api/v1/scholarships')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched scholarships:', data);
                if (Array.isArray(data.data)) {
                    setScholarships(data.data);
                } else {
                    setScholarships([]);
                    console.error('Unexpected data format:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching scholarships:', error);
                setScholarships([]);
            });
    }, []);

    return (
        <div className="scholarshipsPage">
            <h1 className="scholarshipsTitle">Scholarships</h1>
            <h2 className="scholarshipsDescription">
                Find financial opportunities for first-generation college students.
            </h2>
            {scholarships.length === 0 ? (
                <p>No scholarships available.</p>
            ) : (
                scholarships.map(item => (
                    <div key={item.id} className="scholarshipCard">
                        <h2>{item.title}</h2>
                        <p><strong>Amount:</strong> ${item.amount}</p>
                        <p><strong>Deadline:</strong> {item.deadline}</p>
                        <p>{item.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Scholarships;
