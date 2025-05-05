import React, { useState } from 'react';
import axios from 'axios';

const DecisionAgent = () => {
    const [data, setData] = useState(null); // For GET request data
    const [postData, setPostData] = useState({ key: '' }); // For POST request payload
    const [postResponse, setPostResponse] = useState(null); // For POST request response
    const [loading, setLoading] = useState(false); // For showing loader

    const handlePostRequest = () => {
        setLoading(true); // Start loading
        setPostResponse(null); // Clear previous response
        // POST request
        axios.post('http://localhost:5000/api/SendDecisionAgent', postData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('POST response:', response.data);
            setPostResponse(response.data.result.text.value); // Store the response in state
        })
        .catch(error => {
            console.error('Error in POST request:', error);
            setPostResponse('<p style="color: red;">Error fetching response</p>'); // Show error message
        })
        .finally(() => {
            setLoading(false); // Stop loading
        });
    };

    const handleInputChange = (e) => {
        setPostData({ key: e.target.value }); // Update the key value dynamically
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Decision AI Agent App</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter value for POST request"
                    value={postData.key}
                    onChange={handleInputChange}
                    style={{
                        width: 'calc(100% - 110px)',
                        padding: '10px',
                        marginRight: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }}
                />
                <button
                    onClick={handlePostRequest}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Send
                </button>
            </div>
            {loading && (
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div className="loader" style={{
                        border: '4px solid #f3f3f3',
                        borderTop: '4px solid #007BFF',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto'
                    }}></div>
                    <p style={{ color: '#888', marginTop: '10px' }}>Fetching response...</p>
                </div>
            )}
           {postResponse && (
    <div style={{
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '20px'
    }}>
        <h3 style={{
            color: '#007BFF',
            fontSize: '1.25rem',
            marginBottom: '10px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '5px'
        }}>
            Decision AI Agent Result
        </h3>
        {/* Render postResponse as HTML */}
        <div style={{
            color: '#333',
            fontSize: '1rem',
            lineHeight: '1.5',
            wordWrap: 'break-word'
        }} dangerouslySetInnerHTML={{ __html: postResponse }} />
    </div>
)}
        </div>
    );
};

export default DecisionAgent;