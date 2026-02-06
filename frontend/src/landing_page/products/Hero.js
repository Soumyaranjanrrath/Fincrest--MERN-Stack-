import React from 'react';

function Hero() {
    return (
        <section className="py-4 border-bottom bg-white">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1 className="mb-2">Technology</h1>
                        <h3 className="text-muted mb-3 fs-5">Sleek, Modern & Innovative Design</h3>
                        <p className="mb-0">Check out our {" "}
                            <a href="#demo" className="text-decoration-none">amazing products. 
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i> 
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
