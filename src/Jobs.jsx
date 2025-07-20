import React, { useState, useEffect } from 'react';

function Jobs() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://5f8a1749-1919-44a4-b406-01d6197a40e3.mock.pstmn.io/api/v1/jobs')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setItems(data);
                } else if (Array.isArray(data.jobs)) {
                    setItems(data.jobs);
                } else {
                    setItems([]);
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
                setItems([]);
            });
    }, []);

    return (
        <div className='jobsPage'>
            <h1 className='jobsTitle'>Jobs</h1>
            <p className='jobsDescription'>
                Here you can find job opportunities that are suitable for first-generation college students.
            </p>
            {items.length === 0 ? (
                <p>No jobs available.</p>
            ) : (
                items.map(item => (
                    <div key={item.id} data-testid={`item-${item.id}`}>
                        {item.name}
                    </div>
                ))
            )}
        </div>
    );
}

export default Jobs;
