import React, { useState, useEffect } from 'react';
import './Jobs.css';

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://5347fd07-56f5-4b47-8de5-7c172b42125a.mock.pstmn.io/api/v1/jobs')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched jobs:', data);
                if (Array.isArray(data)) {
                    setJobs(data);
                } else if (Array.isArray(data.jobs)) {
                    setJobs(data.jobs);
                } else {
                    setJobs([]);
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
                setJobs([]);
            });
    }, []);

    return (
        <div className='jobsPage'>
            <h1 className='jobsTitle'>Jobs</h1>
            <h2 className='jobsDescription'>
                Here you can find job opportunities that are suitable for first-generation college students.
            </h2>
            {jobs.length === 0 ? (
                <p>No jobs available.</p>
            ) : (
                jobs.map(item => (
                    <div key={item.id} data-testid={`item-${item.id}`} className="jobCard">
                        <h2>{item.title}</h2>
                        <p><strong>Company:</strong> {item.company}</p>
                        <p><strong>Location:</strong> {item.location}</p>
                        <p><strong>Salary:</strong> ${item.salary}</p>
                        <p>{item.description}</p>
                    </div>
                ))

            )}
        </div>
    );
}

export default Jobs;
