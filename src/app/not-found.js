import React from 'react'
import './404page.css'
import Link from 'next/link';

function notfound() {
    return (
        <div className="container">
            <div className="error-wrapper">
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link href="/">Go back to home
                </Link>
            </div>
        </div>
    );
}

export default notfound
