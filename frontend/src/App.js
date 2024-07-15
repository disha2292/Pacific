import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/').then(response => {
            setMessage(response.data);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Pacific</h1>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
