import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/HomeHero.png' alt='hero' className='mb-5' /> 
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutualfunds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"18%",margin: "0 auto"}}>Signup Now</button>
            </div>


        </div>
    );
}

export default Hero;