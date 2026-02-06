import React from 'react';

function Hero() {
    return (
        <section className="py-5 bg-white">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <img src='media/images/HomeHero.png' alt='hero' className='img-fluid mb-4' style={{maxHeight: '340px', width: 'auto'}} />
                        <h1 className='mb-3'>Invest in Everything</h1>
                        <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, and more.</p>
                        <button className='btn btn-primary fs-5 px-4'>Signup Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;