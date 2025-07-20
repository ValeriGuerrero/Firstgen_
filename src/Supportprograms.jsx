import React, { useState, useEffect } from 'react';
import './SupportPrograms.css';

function SupportPrograms() {
    const [supportPrograms, setSupportPrograms] = useState([]);

    useEffect(() => {
        fetch('https://5347fd07-56f5-4b47-8de5-7c172b42125a.mock.pstmn.io/api/v1/support-programs')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched support programs:", data);
                if (Array.isArray(data.supportPrograms)) {
                    setSupportPrograms(data.supportPrograms);
                } else {
                    console.error("Expected an array under 'supportPrograms' but got:", data);
                    setSupportPrograms([]);
                }
            })
            .catch(error => {
                console.error('Error fetching support programs:', error);
                setSupportPrograms([]);
            });
    }, []);

    return (
        <div className='SupportProgramsPage'>
            <h1 className='SupportProgramsTitle'>Support Programs</h1>
            <h2 className='SupportProgramsDescription'>
                Here you can find Support Programs that are suitable for first-generation college students.
            </h2>
            {supportPrograms.length === 0 ? (
                <p>No support programs available.</p>
            ) : (
                supportPrograms.map(item => (
                    <div key={item.id} className="supportProgramCard">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p><strong>Eligibility:</strong> {item.eligibility}</p>
                        <p><strong>Contact:</strong> {item.contact.email} | {item.contact.phone}</p>
                        <p><strong>Schedule:</strong> {item.schedule.days.join(', ')}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default SupportPrograms;
