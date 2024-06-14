'use client'
import React from 'react'
import { useEffect, useState } from 'react'




function Page() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/quotes');
                const data = await response.json();
                setQuotes(data.quotes);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); 
    return (
        <div >
            <title>Blogclient</title>
            <h1>Blog</h1>   
            {quotes.map((item, index) => (
                <div key={index}>
                    <p><b>Author:</b> {item.author}</p>
                    <p><strong>Quote:</strong> {item.quote}</p>
                </div>
            ))}
        </div>
    )
}

export default Page
