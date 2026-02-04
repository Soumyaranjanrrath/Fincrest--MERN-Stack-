import React from 'react';

function Hero() {
    return (
        <div className='container border-bottom mb-5'>
            <div className='text-center mt-5 p-3'>
                <h1>Technology</h1>
                <h3 className='text-muted mt-3 fs-5'>
                    Sleek, Modern & Innovative Design
                </h3>
                <p className='mt-4'>Check out our {" "}
                    <a href="#demo" style={{ textDecoration: "none" }}>amazing products. 
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i> 
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
