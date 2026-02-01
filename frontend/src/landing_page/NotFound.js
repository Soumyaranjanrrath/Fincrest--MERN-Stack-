import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (  
        <div className='container p-5 mb-5 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='mt-5 text-center'>404 Not Found</h1>
            <p className='text-center'>Sorry, the page you are looking for does not exist.</p>
            <Link to='/' className='btn btn-primary'>Go to Homepage</Link>
        </div>
    );
}

export default NotFound;